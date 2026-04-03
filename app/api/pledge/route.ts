import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    const { count, error } = await supabase
      .from("pledges")
      .select("*", { count: "exact", head: true })

    if (error) {
      console.error("Error fetching pledge count:", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }

    return NextResponse.json({ count: count ?? 0 }, { status: 200 })
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

    const { data, error } = await supabase
      .from("pledges")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        state: state,
        zip_code: zipCode,
        comments: comments || null,
        ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null,
        user_agent: request.headers.get("user-agent") || null,
      })
      .select("id")
      .single()

    if (error) {
      console.error("Error saving pledge:", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }

    console.log("New pledge saved:", {
      pledgeId: data.id,
      email,
      state,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        message: "Pledge recorded successfully",
        pledgeId: data.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing pledge:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
