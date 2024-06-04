'use server';

// Libs
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Types
import { SignupFormValues } from '../signup/page';
import { LoginFormInputs } from './page';

// Utils
import { createClient } from '@/utils/supabase/server';

export async function login ( loginData: LoginFormInputs ) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: loginData.email
        , password: loginData.password
    };

    const { error } = await supabase.auth.signInWithPassword( data );

    if ( error ) {
        redirect( '/error' );
    }

    revalidatePath( '/', 'layout' );
    redirect( '/private' );
}

export async function signup ( signupData: SignupFormValues ) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: signupData.email
        , password: signupData.password
    };

    const { error } = await supabase.auth.signUp( data );

    if ( error ) {
        redirect( '/error' );
    }

    revalidatePath( '/', 'layout' );
    redirect( '/' );
}
