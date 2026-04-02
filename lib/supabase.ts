import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please check your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Pledge {
  id?: string
  first_name: string
  last_name: string
  email: string
  state: string
  zip_code: string
  comments?: string
  created_at?: string
  ip_address?: string
  user_agent?: string
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  subject: string
  category?: string
  message: string
  created_at?: string
  ip_address?: string
  user_agent?: string
}
