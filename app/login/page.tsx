'use client';

// Libs
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import {
    SubmitHandler
    , useForm
} from 'react-hook-form';
import {
    object
    , string
} from 'yup';

// MUI
import {
    Visibility
    , VisibilityOff
} from '@mui/icons-material';
import {
    Button
    , Divider
    , IconButton
    , InputAdornment
    , Paper
    , Stack
    , TextField
    , Tooltip
    , Typography
} from '@mui/material';

// Utils
import { pxrem } from '@/utils/pxrem';

interface LoginFormInputs {
    username: string;
    password: string;
}

const loginSchema = object().shape( {
    username: string().required( 'Username is required' )
    , password: string().required( 'Password is required' )
} );

export default function LoginPage () {
    const [ showPassword, setShowPassword ] = useState<boolean>( false );
    const {
        register
        , handleSubmit
        , formState: {
            errors
            , isDirty
        }
    } = useForm<LoginFormInputs>( {
        defaultValues: {
            username: ''
            , password: ''
        }
        , resolver: yupResolver( loginSchema )
        , mode: 'onBlur'
    } );

    const toggleShowPassword = () => {
        setShowPassword( !showPassword );
    };

    const onSubmit: SubmitHandler<LoginFormInputs> = data => console.log( { data } );

    return (
        <Stack
            width='100%'
            height='100vh'
            alignItems='center'
            justifyContent='center'
        >
            <Paper>
                <Stack
                    minWidth={ pxrem( 500 ) }
                    gap={ pxrem( 24 ) }
                    p={ pxrem( 42 ) }
                    component='form'
                    onSubmit={ handleSubmit( onSubmit ) }
                >
                    <Typography
                        variant='h3'
                        textAlign='center'
                    >
                        Log In
                    </Typography>
                    <TextField
                        label='Username'
                        placeholder='Enter your username'
                        error={ !!errors.username }
                        helperText={ errors.username?.message }
                        { ...register( 'username' ) }
                    />
                    <TextField
                        label='Password'
                        type={ showPassword ? 'text' : 'password' }
                        placeholder='Enter your password'
                        error={ !!errors.password }
                        helperText={ errors.password?.message }
                        { ...register( 'password' ) }
                        InputProps={ {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Tooltip title={ showPassword ? 'Hide password' : 'Reveal password' }>
                                        <IconButton
                                            aria-label='Toggle password visibility'
                                            onClick={ toggleShowPassword }
                                        >
                                            { showPassword ? <VisibilityOff /> : <Visibility /> }
                                        </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            )
                        } }
                    />
                    <Button
                        variant='contained'
                        size='large'
                        type='submit'
                        disabled={ !!Object.keys( errors ).length || !isDirty }
                    >
                        Log In
                    </Button>
                    <Divider sx={ { width: '100%' } }>
                        OR
                    </Divider>
                    <Button
                        variant='contained'
                        size='large'
                    >
                        Log In With Google
                    </Button>
                </Stack>
            </Paper>
        </Stack>
    );
}
