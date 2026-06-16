"use server"

import { db } from "@/lib/db"
import { pledges, newsletterSubscribers } from "@/lib/db/schema"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { randomUUID } from "crypto"
import { count, eq } from "drizzle-orm"

export interface PledgeInput {
  firstName: string
  lastName: string
  email: string
  state: string
  district?: string
  party?: string
  sharePublicly?: boolean
  emailUpdates?: boolean
  message?: string
}

export async function submitPledge(input: PledgeInput) {
  // Validate required fields
  if (!input.firstName?.trim() || !input.lastName?.trim() || !input.email?.trim() || !input.state?.trim()) {
    return { success: false, error: "Please fill in all required fields." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(input.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  // Check if already pledged
  const existing = await db
    .select({ id: pledges.id })
    .from(pledges)
    .where(eq(pledges.email, input.email.toLowerCase()))
    .limit(1)

  if (existing.length > 0) {
    return { success: false, error: "This email has already taken the pledge. Thank you for your commitment!" }
  }

  // Get optional user session
  const session = await auth.api.getSession({ headers: await headers() }).catch(() => null)

  await db.insert(pledges).values({
    id: randomUUID(),
    userId: session?.user?.id ?? null,
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    email: input.email.toLowerCase().trim(),
    state: input.state.trim(),
    district: input.district?.trim() ?? null,
    party: input.party?.trim() ?? null,
    sharePublicly: input.sharePublicly ?? false,
    emailUpdates: input.emailUpdates ?? true,
    message: input.message?.trim() ?? null,
  })

  // Also subscribe to newsletter if opted in
  if (input.emailUpdates !== false) {
    await db
      .insert(newsletterSubscribers)
      .values({
        id: randomUUID(),
        email: input.email.toLowerCase().trim(),
        firstName: input.firstName.trim(),
        state: input.state.trim(),
        confirmed: false,
        unsubscribed: false,
      })
      .onConflictDoNothing()
  }

  return { success: true }
}

export async function getPledgeCount(): Promise<number> {
  const result = await db.select({ count: count() }).from(pledges)
  return result[0]?.count ?? 0
}

export async function getPledgesByState(): Promise<{ state: string; count: number }[]> {
  const rows = await db
    .select({ state: pledges.state, count: count() })
    .from(pledges)
    .groupBy(pledges.state)
    .orderBy(count())

  return rows.map((r) => ({ state: r.state, count: Number(r.count) }))
}
