'use server';

import { revalidatePath } from 'next/cache';
import {
    db
    , stats
} from '..';
import { eq } from 'drizzle-orm';

export const getStats = async () => {
    return await db.select().from( stats );
};

export const addStat = async ( name: string ) => {
    const result = await db.insert( stats ).values( { name } );
    revalidatePath( '/admin/stats' );
    return result;
};

export const deleteStat = async ( id: number ) => {
    const result = await db.delete( stats ).where( eq( stats.id, id ) );
    revalidatePath( '/admin/stats' );
    return result;
};
