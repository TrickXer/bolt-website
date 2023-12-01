import React from 'react'
import { Grid, Typography } from '@mui/material'
import Display from '../../components/Display'

export default function Features(props) {
    
    const features = ['play', 'movie', 'valorant', 'twitch']

    return (
        <Grid container id='features' justifyContent='center' sx={
            (theme) => ({
                p: '2em 12em',
                [theme.breakpoints.down('tb')]: {
                    p: '2em 2em'
                },
                [theme.breakpoints.between('tb', 'lp')]: {
                    p: '2em 4em'
                },
            })
        }>
            <Typography mb='2em' variant='h2' textAlign='center'>Features</Typography>
            {
                features.map((name, id) => (
                    <Display key={id} title={name} id={id} />
                ))
            }
        </Grid>
    )
}
