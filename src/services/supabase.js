import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pglcxhdaxugftkjbzgme.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnbGN4aGRheHVnZnRramJ6Z21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MTk1MTIsImV4cCI6MjAxMTk5NTUxMn0.-nMdBTrn22Ci5FEOLtVJ9dUslUQ77BB3awptWsdHGjA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
