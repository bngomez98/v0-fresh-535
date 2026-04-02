import { type NextRequest, NextResponse } from "next/server"
import { ballotpediaClient, openSecretsClient } from "@/lib/api-clients"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const zipCode = searchParams.get("zip")

  // Validate ZIP code format
  if (!zipCode || !/^\d{5}$/.test(zipCode)) {
    return NextResponse.json(
      { error: "Valid 5-digit zip code required" },
      { status: 400 }
    )
  }

  try {
    // Retrieve district data from Ballotpedia
    const district = await ballotpediaClient?.getCandidatesByZip?.(zipCode)
    if (!district || (!district.representatives && !district.senators)) {
      return NextResponse.json(
        { error: "District not found" },
        { status: 404 }
      )
    }

    // Merge and enrich candidate data
    const allCandidates = [
      ...(district.representatives ?? []),
      ...(district.senators ?? [])
    ]

    // Fetch lobbying and voting data for each candidate in parallel
    await Promise.all(
      allCandidates.map(async (candidate) => {
        try {
          candidate.lobbyingConnections =
            await openSecretsClient?.getLobbyingData?.(candidate.id) ?? []
          candidate.votingRecord =
            await openSecretsClient?.getVotingRecord?.(candidate.id) ?? []
        } catch (err) {
          console.warn(
            `Failed to fetch data for candidate ${candidate.id}:`,
            err
          )
          candidate.lobbyingConnections = []
          candidate.votingRecord = []
        }
      })
    )

    return NextResponse.json(district)
  } catch (error) {
    console.error("Error fetching district data:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
