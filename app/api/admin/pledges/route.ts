import { NextResponse } from "next/server"

// Note: This returns an empty array since we removed Supabase database.
// Data would need to be stored elsewhere (e.g., another database or service).
export async function GET() {
  try {
    // Return empty pledges array - authentication removed
    return NextResponse.json({ data: [] })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
