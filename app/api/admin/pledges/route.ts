import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function GET() {
  try {
    const supabase = await createClient()

    // Check if user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch pledges from database
    const { data: pledges, error } = await supabase
      .from("pledges")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching pledges:", error)
      return NextResponse.json(
        { error: "Failed to fetch pledges" },
        { status: 500 }
      )
    }

    return NextResponse.json({ data: pledges })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
