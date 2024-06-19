'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from '..';

export const getStats = async () => {
    return await supabase.from( 'stats' ).select( '*' );
};

export const addStat = async ( name: string ) => {
    const result = await supabase.from( 'stats' ).insert( { name } );
    revalidatePath( '/admin/stats' );
    return result;
};

export const deleteStat = async ( id: number ) => {
    const result = await supabase.from( 'stats' ).delete().eq( 'id', id );
    revalidatePath( '/admin/stats' );
    return result;
};
