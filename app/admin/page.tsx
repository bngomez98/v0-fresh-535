import { AdminDashboard } from "@/components/admin-dashboard"

export default async function AdminPage() {
  // Note: Authentication has been removed with Supabase.
  // This page now renders without authentication checks.
  // Implement a new authentication provider if needed.

  // Pass a mock user object since AdminDashboard expects it
  const mockUser = {
    id: "mock-user-id",
    email: "admin@fresh535.org",
  }

  return <AdminDashboard user={mockUser} />
}
