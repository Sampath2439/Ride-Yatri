import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sfdxdawjeagwqongysuh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZHhkYXdqZWFnd3Fvbmd5c3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MzQ2OTUsImV4cCI6MjA3MDMxMDY5NX0.1ZprC2XPKlyaxkxbsDYRW6k-3GkaaeB_bcxgqiKyJAY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
