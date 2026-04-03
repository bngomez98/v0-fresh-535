import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { analyticsSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = analyticsSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Invalid analytics data" }, { status: 400 })
    }

    const { event, path, referrer, userAgent } = result.data

    await prisma.analyticsEvent.create({
      data: {
        event,
        path: path ?? null,
        referrer: referrer ?? null,
        userAgent: userAgent?.substring(0, 500) ?? null,
        ipAddress:
          request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip") ??
          null,
      },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error processing analytics:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
