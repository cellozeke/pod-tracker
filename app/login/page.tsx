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
    Visibility as ShowPasswordIcon
    , VisibilityOff as HidePasswordIcon
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
import Link from 'next/link';

// Utils
import { pxrem } from '@/utils/pxrem';
import { login } from './actions';

export interface LoginFormInputs {
    email: string;
    password: string;
}

const loginSchema = object().shape( {
    email: string().required( 'Email is required' )
    , password: string().required( 'Password is required' )
} );

export default function LoginPage () {
    const [ showPassword, setShowPassword ] = useState<boolean>( false );
    const {
        register
        , handleSubmit
        , formState: {
            errors
            , isValid
        }
    } = useForm<LoginFormInputs>( {
        defaultValues: {
            email: ''
            , password: ''
        }
        , resolver: yupResolver( loginSchema )
        , mode: 'onChange'
    } );

    const toggleShowPassword = () => {
        setShowPassword( !showPassword );
    };

    const onSubmit: SubmitHandler<LoginFormInputs> = data => {
        console.log( { data } );
        login( data );
    };

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
                        label='Email'
                        placeholder='Enter your email'
                        error={ !!errors.email }
                        helperText={ errors.email?.message }
                        { ...register( 'email' ) }
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
                                            { showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon /> }
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
                        disabled={ !isValid }
                    >
                        Log In
                    </Button>
                    <Divider sx={ { width: '100%' } }>
                        <Typography
                            variant='body1'
                            textAlign='center'
                        >
                            OR
                        </Typography>
                    </Divider>
                    <Button
                        variant='contained'
                        size='large'
                    >
                        Log In With Google
                    </Button>
                    <Typography
                        textAlign='center'
                        sx={ {
                            '& a': {
                                color: 'primary.main'
                                , textDecoration: 'none'
                            }
                        } }
                    >
                        Don&apos;t have an account? <Link href='/sign-up'>Sign Up</Link>
                    </Typography>
                </Stack>
            </Paper>
        </Stack>
    );
}
