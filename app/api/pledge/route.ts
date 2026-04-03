import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for pledges (will reset on server restart)
const pledges: Array<{
  id: string
  first_name: string
  last_name: string
  email: string
  state: string
  zip_code: string
  comments?: string
  ip_address?: string
  user_agent?: string
  created_at: string
}> = []

export async function GET() {
  try {
    // Return the total count of pledges
    return NextResponse.json({ count: pledges.length }, { status: 200 })
  } catch (error) {
    console.error("Error fetching pledge count:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, state, zipCode, comments } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !state || !zipCode) {
      return NextResponse.json({ error: "All required fields must be provided" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate ZIP code
    if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
      return NextResponse.json({ error: "Invalid ZIP code format" }, { status: 400 })
    }

    // Create new pledge
    const pledge = {
      id: crypto.randomUUID(),
      first_name: firstName,
      last_name: lastName,
      email: email,
      state: state,
      zip_code: zipCode,
      comments: comments || undefined,
      ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      user_agent: request.headers.get("user-agent") || undefined,
      created_at: new Date().toISOString(),
    }

    pledges.push(pledge)

    console.log("New pledge saved:", {
      pledgeId: pledge.id,
      email,
      state,
      timestamp: pledge.created_at,
    })

    return NextResponse.json(
      {
        message: "Pledge recorded successfully",
        pledgeId: pledge.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing pledge:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
