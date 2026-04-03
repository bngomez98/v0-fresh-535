import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "50", 10)))
    const state = searchParams.get("state")
    const sortBy = searchParams.get("sortBy") ?? "createdAt"
    const order = searchParams.get("order") === "asc" ? "asc" as const : "desc" as const

    const allowedSortFields = ["createdAt", "state", "email", "firstName", "lastName"] as const
    type SortField = (typeof allowedSortFields)[number]
    const sortField: SortField = allowedSortFields.includes(sortBy as SortField)
      ? (sortBy as SortField)
      : "createdAt"

    const where = state ? { state } : {}

    const [data, total] = await Promise.all([
      prisma.pledge.findMany({
        where,
        orderBy: { [sortField]: order },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.pledge.count({ where }),
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
    console.error("Error fetching pledges:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
