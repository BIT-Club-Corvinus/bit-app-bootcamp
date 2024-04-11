
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseURL= process.env.SUPABASE_API_URL
const supabaseKey= process.env.SUPABASE_API_KEY

const supabase = createClient(supabaseURL, supabaseKey)

export default supabase