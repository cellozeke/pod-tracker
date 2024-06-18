'use client';

import React from 'react';

// MUI
import { IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// Actions
import { deleteStat } from '@/db/actions/stats';

const DeleteStat = ( { id }: {id: number} ) => {

    const handleDeleteStat = async () => {
        if ( confirm( 'Are you sure you want to delete this stat?' ) === true ) {
            await deleteStat( id );
        }
    };

    return (
        <IconButton
            color='error'
            onClick={ handleDeleteStat }
        >
            <DeleteIcon />
        </IconButton>
    );
};

export default DeleteStat;
