export const dynamic = "force-dynamic"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"
import { verifySession, SESSION_COOKIE } from "@/lib/auth"
import type { NextRequest } from "next/server"

export default async function AdminPage() {
  const cookieStore = await cookies()

  // Build a minimal request-like object to reuse verifySession
  const mockRequest = {
    cookies: {
      get: (name: string) => cookieStore.get(name),
    },
  } as unknown as NextRequest

  if (!(await verifySession(mockRequest))) {
    redirect("/login?redirect=/admin")
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@fresh535.org"

  const adminUser = {
    id: "admin",
    email: adminEmail,
  }

  return <AdminDashboard user={adminUser} />
}
