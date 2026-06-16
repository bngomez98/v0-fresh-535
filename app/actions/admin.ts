"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { pledges, contactMessages, user as userTable, newsletterSubscribers } from "@/lib/db/schema"
import { headers } from "next/headers"
import { desc, count, eq } from "drizzle-orm"

async function requireAdminSession() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Unauthorized")
  // Check if user is admin (env-configured admin email)
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@fresh535.org"
  if (session.user.email !== adminEmail) throw new Error("Forbidden")
  return session.user
}

export async function getAdminPledges() {
  await requireAdminSession()
  return db.select().from(pledges).orderBy(desc(pledges.createdAt)).limit(500)
}

export async function getAdminMessages() {
  await requireAdminSession()
  return db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt)).limit(500)
}

export async function getAdminStats() {
  await requireAdminSession()
  const [pledgeCount] = await db.select({ count: count() }).from(pledges)
  const [messageCount] = await db.select({ count: count() }).from(contactMessages)
  const [userCount] = await db.select({ count: count() }).from(userTable)
  const [subscriberCount] = await db.select({ count: count() }).from(newsletterSubscribers)
  const [unreadCount] = await db
    .select({ count: count() })
    .from(contactMessages)
    .where(eq(contactMessages.status, "unread"))

  const stateBreakdown = await db
    .select({ state: pledges.state, count: count() })
    .from(pledges)
    .groupBy(pledges.state)
    .orderBy(desc(count()))
    .limit(10)

  return {
    pledges: Number(pledgeCount.count),
    messages: Number(messageCount.count),
    users: Number(userCount.count),
    subscribers: Number(subscriberCount.count),
    unreadMessages: Number(unreadCount.count),
    stateBreakdown: stateBreakdown.map((r) => ({ state: r.state, count: Number(r.count) })),
  }
}

export async function markMessageRead(id: string) {
  await requireAdminSession()
  await db.update(contactMessages).set({ status: "read" }).where(eq(contactMessages.id, id))
}
