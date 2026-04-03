import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "50", 10)))
    const category = searchParams.get("category")
    const sortBy = searchParams.get("sortBy") ?? "createdAt"
    const order = searchParams.get("order") === "asc" ? "asc" as const : "desc" as const

    const allowedSortFields = ["createdAt", "email", "subject", "name"] as const
    type SortField = (typeof allowedSortFields)[number]
    const sortField: SortField = allowedSortFields.includes(sortBy as SortField)
      ? (sortBy as SortField)
      : "createdAt"

    const where = category ? { category } : {}

    const [data, total] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { [sortField]: order },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.contactMessage.count({ where }),
    ])

    return NextResponse.json({
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
