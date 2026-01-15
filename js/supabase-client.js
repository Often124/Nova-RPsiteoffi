
// ============================================
// NOVA-RP - Supabase Client
// ============================================

const SUPABASE_URL = 'https://xcbbjwurhqixedfbfoyy.supabase.co';
const SUPABASE_KEY = 'sb_publishable_7Rdi-cNu3bj4pVuL5IByHQ_fUiqDtxj';

let supabase = null;

if (window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('✅ Supabase connected');
} else {
    console.error('❌ Supabase SDK not loaded');
}
