import { type NextRequest, NextResponse } from "next/server"
import { validateAdminCredentials, createSessionToken, SESSION_COOKIE } from "@/lib/auth"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = loginSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message ?? "Invalid input" },
        { status: 400 }
      )
    }

    const { email, password } = result.data

    if (!validateAdminCredentials(email, password)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    const token = await createSessionToken(email)

    const response = NextResponse.json({ success: true })
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours in seconds
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
