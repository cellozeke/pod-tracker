import { createBrowserClient } from '@supabase/ssr';
import { createClient } from '@/utils/supabase/client';

export const supabase = createClient();

export const supabaseServer = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
);
