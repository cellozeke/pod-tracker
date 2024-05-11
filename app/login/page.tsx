// Libs
import {
    Button
    , Divider
    , Paper
    , Stack
    , TextField
    , Typography
} from '@mui/material';

// Utils
import { pxrem } from '@/utils/pxrem';

export default function LoginPage () {
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
                >
                    <Typography
                        variant='h3'
                        textAlign='center'
                    >
                        Login
                    </Typography>
                    <TextField
                        label='Username'
                        placeholder='Enter your username'
                    />
                    <TextField
                        label='Password'
                        placeholder='Enter your password'
                    />
                    <Button
                        variant='contained'
                        size='large'
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
