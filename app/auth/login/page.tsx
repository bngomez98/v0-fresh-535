import { createClient, isSupabaseConfigured } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Login | Fresh 535",
  description: "Log in to your Fresh 535 account.",
  alternates: {
    canonical: "/auth/login",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default async function LoginPage() {
  // If Supabase is not configured, show setup message directly
  if (!isSupabaseConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-navy">
        <h1 className="text-2xl font-bold mb-4 text-brand-cream">Connect Supabase to get started</h1>
      </div>
    )
  }

  // Check if user is already logged in
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If user is logged in, redirect to home page
  if (session) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-navy px-4 py-12 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  )
}
