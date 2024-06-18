import React from 'react';

// MUI
import {
    Paper
    , Stack
    , Table
    , TableBody
    , TableCell
    , TableContainer
    , TableHead
    , TableRow
    , Typography
} from '@mui/material';

// Utils
import { pxrem } from '@/utils/pxrem';

// Actions
import { getStats } from '@/db/actions/stats';

// Components
import StatForm from './stat-form/stat-form';
import DeleteStat from './delete-stat/delete-stat';

const Stats = async () => {

    const stats = await getStats();

    return (
        <Stack
            padding={ pxrem( 20, 40 ) }
            gap={ pxrem( 12 ) }
        >
            <Typography
                variant='h2'
                color='primary.main'
            >
                Stats
            </Typography>
            <TableContainer
                component={ Paper }
                sx={ {
                    minWidth: 300
                    , maxWidth: 750
                } }
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography fontWeight={ 600 }>
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight={ 600 }>
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell align='right'>
                                <Typography fontWeight={ 600 }>
                                    More
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { stats.map( stat => (
                            <TableRow
                                key={ stat.id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell>{ stat.id }</TableCell>
                                <TableCell
                                    component='th'
                                    scope='row'
                                >
                                    { stat.name }
                                </TableCell>
                                <TableCell align='right'>
                                    <DeleteStat id={ stat.id } />
                                </TableCell>
                            </TableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
            <StatForm />
        </Stack>
    );
};

export default Stats;
