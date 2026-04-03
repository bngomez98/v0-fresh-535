import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { pledgeSchema } from "@/lib/validations"

export async function GET() {
  try {
    const count = await prisma.pledge.count()
    return NextResponse.json({ count }, { status: 200 })
  } catch (error) {
    console.error("Error fetching pledge count:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = pledgeSchema.safeParse(body)
    if (!result.success) {
      const firstError = result.error.errors[0]?.message ?? "Invalid input"
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { firstName, lastName, email, state, zipCode, comments } = result.data

    const pledge = await prisma.pledge.create({
      data: {
        firstName,
        lastName,
        email,
        state,
        zipCode,
        comments: comments ?? null,
        ipAddress:
          request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip") ??
          null,
        userAgent: request.headers.get("user-agent") ?? null,
      },
    })

    console.log("New pledge saved:", {
      pledgeId: pledge.id,
      email,
      state,
      timestamp: pledge.createdAt,
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
