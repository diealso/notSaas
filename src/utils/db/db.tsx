import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://afutdsznrgmgkkwzetcn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdXRkc3pucmdtZ2trd3pldGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMTkwMDcsImV4cCI6MjAwOTU5NTAwN30.C_R0Q7X2kbOqhf8DZgm_PPahxTMPTuc3U7JVk4QvqE4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
