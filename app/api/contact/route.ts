import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { contactSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = contactSchema.safeParse(body)
    if (!result.success) {
      const firstError = result.error.errors[0]?.message ?? "Invalid input"
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { name, email, subject, category, message } = result.data

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        category: category ?? null,
        message,
        ipAddress:
          request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip") ??
          null,
        userAgent: request.headers.get("user-agent") ?? null,
      },
    })

    console.log("New contact message saved:", {
      messageId: contactMessage.id,
      email,
      subject,
      timestamp: contactMessage.createdAt,
    })

    return NextResponse.json(
      { message: "Message sent successfully", messageId: contactMessage.id },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
