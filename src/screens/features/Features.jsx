import React from 'react'
import boltDemo from '../../resource/bolt_demo.png'
import { Box, Paper, Typography } from '@mui/material'

export default function Features(props) {
    
    const features = [1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <Box sx={{ p: '2em 12em', display: 'grid' }}>
            <Typography mb='2em' variant='h2' textAlign='center'>Features</Typography>
            {
                features.map((elm, id) => (
                    <Paper key={id} sx={{
                        p: '21px', width: '300px', height: 'auto',
                        display: 'flex', justifyContent: 'center', alignItems: 'center', justifySelf: id%2 === 0 ? 'left' : 'right',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
                        backdropFilter: 'blur(2.5px)', borderRadius: '10px', border: '.2px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                        transform: `perspective(1000px) rotateY(${Math.pow(-1, id) * 25}deg) rotateX(10deg)`,
                    }}>
                        <img style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', borderRadius: '8px' }} src={boltDemo} alt='bolt_demo.png' />
                    </Paper>
                ))
            }
        </Box>
    )
}
