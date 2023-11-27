import React from 'react'
import { Box, Typography } from '@mui/material'
import Display from '../../components/Display'

export default function Features(props) {
    
    const features = [1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <Box sx={{ p: '2em 12em', display: 'grid' }}>
            <Typography mb='2em' variant='h2' textAlign='center'>Features</Typography>
            {
                features.map((elm, id) => (
                    <Display key={id} id={id} />
                ))
            }
        </Box>
    )
}
