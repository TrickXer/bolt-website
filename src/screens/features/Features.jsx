import React from 'react'
import { Box, Typography } from '@mui/material'
import Display from '../../components/Display'

export default function Features(props) {
    
    const features = ['play', 'movie', 'valorant', 'twitch']

    return (
        <Box id='features' sx={{ p: '2em 12em', display: 'grid' }}>
            <Typography mb='2em' variant='h2' textAlign='center'>Features</Typography>
            {
                features.map((name, id) => (
                    <Display key={id} title={name} id={id} />
                ))
            }
        </Box>
    )
}
