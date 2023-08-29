import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pbzigykjmvchcxxxdpmo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemlneWtqbXZjaGN4eHhkcG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODc1NjAsImV4cCI6MTk5MzM2MzU2MH0.jpBy1GVMUF3XnFL_YWLHnaUo2zrBNPtFIZZWQE9XUwE';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
