import {
    pgTable
    , serial
    , timestamp
    , varchar
} from 'drizzle-orm/pg-core';

export const stats = pgTable( 'stats', {
    id: serial( 'id' ).primaryKey()
    , createdAt: timestamp( 'created_at' ).notNull().defaultNow()
    , name: varchar( 'name' ).notNull()
} );
