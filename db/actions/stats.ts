'use server';

import { revalidatePath } from 'next/cache';
import { supabaseServer } from '..';

export const getStats = async () => {
    const { data: stats } = await supabaseServer.from( 'stats' ).select( '*' );
    return stats ?? [];
};

export const addStat = async ( name: string ) => {
    const result = await supabaseServer.from( 'stats' ).insert( { name } );
    revalidatePath( '/admin/stats' );
    return result;
};

export const deleteStat = async ( id: number ) => {
    const result = await supabaseServer.from( 'stats' ).delete().eq( 'id', id );
    revalidatePath( '/admin/stats' );
    return result;
};
