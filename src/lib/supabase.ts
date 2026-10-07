import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://grhdavrplsaepaziesgc.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaGRhdnJwbHNhZXBhemllc2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDgyODQsImV4cCI6MjEwMjE4NDI4NH0.rYF3yWNBpi-CntEXLr8XVQDme6Di57TPI_6ZgBevGtI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to create a Supabase client with the Clerk JWT token
export const createClerkSupabaseClient = (clerkToken: string) => {
  return createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      global: {
        headers: {
          Authorization: `Bearer ${clerkToken}`
        }
      }
    }
  )
}
