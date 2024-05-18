'use client';

import {
    ThemeOptions
    , createTheme
} from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark'
        , primary: {
            main: '#af7d4b'
        }
        , secondary: {
            main: '#7d7d7d'
        }
        , text: {
            primary: '#af967d'
            , secondary: 'rgba(175,150,125,0.7)'
            , disabled: 'rgba(175,150,125,0.5)'
        }
        , error: {
            main: '#fa4b32'
        }
        , warning: {
            main: '#fa9632'
        }
        , info: {
            main: '#967daf'
        }
        , success: {
            main: '#64af64'
        }
    }
    , typography: {
        fontFamily: 'Sedan SC'
    }
};

export const theme = createTheme( themeOptions );
