import { createClient } from '@/utils/supabase/client';
import { createClient as createServerClient } from '@/utils/supabase/server';

export const supabase = createClient();

export const supabaseServer = createServerClient();
