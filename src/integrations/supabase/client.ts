import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ywsuicwydbxvsckgbujn.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3c3VpY3d5ZGJ4dnNja2didWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDc0MjksImV4cCI6MjA4MDM4MzQyOX0.TZaV320Pj7UmX0Iz5e_2HTc-XLKkDfcsBuCEEzVBoEg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);