'use client';

import React, { useState } from 'react';

// MUI
import { Add as AddIcon } from '@mui/icons-material';
import {
    Button
    , Stack
    , TextField
} from '@mui/material';

// Utils
import { pxrem } from '@/utils/pxrem';

// Actions
import { addStat } from '@/db/actions/stats';

const StatForm = () => {

    const [ statName, setStatName ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const handleAddStat = async () => {
        if ( !statName ) {
            setError( 'A Stat name is required' );
            return;
        }
        const res = await addStat( statName );
        if ( res ) {
            setError( '' );
            setStatName( '' );
        }
    };

    return (
        <Stack
            direction='row'
            alignItems='center'
            gap={ pxrem( 12 ) }
            width='100%'
            maxWidth={ 750 }
        >
            <TextField
                required
                id='stat-name'
                label='Stat Name'
                placeholder='Enter Stat Name'
                fullWidth
                value={ statName }
                onChange={ e => setStatName( e.target.value ) }
                error={ !!error }
                helperText={ error }
            />
            <Button
                variant='contained'
                startIcon={ <AddIcon /> }
                sx={ { minWidth: pxrem( 120 ) } }
                onClick={ handleAddStat }
            >
                Add
            </Button>
        </Stack>
    );
};

export default StatForm;
