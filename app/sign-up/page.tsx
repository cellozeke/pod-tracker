'use client';

import { useState } from 'react';

// Libs
import {
    object
    , ref
    , string
} from 'yup';
import {
    Button
    , Divider
    , IconButton
    , InputAdornment
    , Paper
    , Stack
    , TextField
    , Typography
} from '@mui/material';
import {
    SubmitHandler
    , useForm
} from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Visibility as ShowPasswordIcon
    , VisibilityOff as HidePasswordIcon
} from '@mui/icons-material';

// Utils
import { pxrem } from '@/utils/pxrem';

interface SignUpFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const signUpSchema = object().shape( {
    username: string().required( 'Username is required' )
    , email: string().email( 'Invalid email address' ).required( 'Email is required' )
    , password: string().min( 6, 'Password must be at least 6 characters' ).required( 'Password is required' )
    , confirmPassword: string().oneOf( [ ref( 'password' ), '' ], 'Passwords must match' ).required( 'Confirm password is required' )
} ).required();

const SignUpPage = () => {

    const [ showPassword, setShowPassword ] = useState( false );

    const {
        register
        , handleSubmit
        , formState: {
            errors
        }
    } = useForm( {
        defaultValues: {
            username: ''
            , email: ''
            , password: ''
            , confirmPassword: ''
        }
        , resolver: yupResolver( signUpSchema )
        , mode: 'onBlur'
    } );

    const onSubmit: SubmitHandler<SignUpFormValues> = data => {
        console.log( data );
    };

    return (
        <Stack
            width='100%'
            height='100%'
            minHeight='100vh'
            marginY={ pxrem( 24 ) }
            alignItems='center'
            justifyContent='center'
        >
            <Paper>
                <form onSubmit={ handleSubmit( onSubmit ) }>
                    <Stack
                        minWidth={ pxrem( 500 ) }
                        gap={ pxrem( 24 ) }
                        p={ pxrem( 42 ) }
                    >
                        <Typography
                            variant='h3'
                            textAlign='center'
                        >
                            Sign Up
                        </Typography>
                        <TextField
                            label='Username'
                            placeholder='Enter your username'
                            error={ !!errors.username }
                            helperText={ errors.username?.message }
                            { ...register( 'username' ) }
                        />
                        <TextField
                            label='Email'
                            placeholder='Enter your email address'
                            error={ !!errors.email }
                            helperText={ errors.email?.message }
                            { ...register( 'email' ) }
                        />
                        <TextField
                            label='Password'
                            placeholder='Enter your password'
                            error={ !!errors.password }
                            helperText={ errors.password?.message }
                            type={ showPassword ? 'text' : 'password' }
                            InputProps={ {
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={ () => setShowPassword( prev => !prev ) }
                                        edge='end'
                                    >
                                        { showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon /> }
                                    </IconButton>
                                </InputAdornment>
                            } }
                            { ...register( 'password' ) }
                        />
                        <TextField
                            label='Confirm Password'
                            placeholder='Confirm your password'
                            error={ !!errors.confirmPassword }
                            helperText={ errors.confirmPassword?.message }
                            { ...register( 'confirmPassword' ) }
                        />
                        <Button
                            variant='contained'
                            size='large'
                            type='submit'
                        >
                            Sign Up
                        </Button>
                        <Divider sx={ { width: '100%' } }>
                            OR
                        </Divider>
                        <Button
                            variant='contained'
                            size='large'
                        >
                            Sign Up With Google
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
                            Already have an account? <Link href='/login'>Log In</Link>
                        </Typography>
                    </Stack>
                </form>
            </Paper>
        </Stack>
    );
};

export default SignUpPage;
