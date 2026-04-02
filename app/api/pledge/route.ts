import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

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

    // Save pledge to Supabase
    const { data, error } = await supabase
      .from('pledges')
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
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to save pledge. Please try again." },
        { status: 500 }
      )
    }

    console.log("New pledge saved to database:", {
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
