import React from 'react'
import boltDemo from '../resource/bolt_demo.png'
import { Box, Paper } from '@mui/material'

export default function Display(props) {
    

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: props.id % 2 === 0 ? 'flex-start' : 'flex-end', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: '100%', display: 'inline-flex', flexDirection: props.id % 2 === 0 ? 'row' : 'row-reverse' }}>
                <hr style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    width: '35%',
                    height: '2px',
                    position: 'absolute',
                    background: `linear-gradient(${props.id % 2 === 0 ? 90 : 270 }deg, transparent 25%, red)`
                }}
                />

                <hr style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    left: props.id % 2 === 0 ? '35%' : 'auto',
                    right: props.id % 2 === 1 ? '35%' : 'auto',
                    width: '50px',
                    height: '2px',
                    background: 'red',
                    position: 'absolute',
                    transformOrigin: `${props.id % 2 === 0 ? 'left' : 'right' } top`,
                    transform: `rotate(${props.id % 2 === 0 ? -45 : 45 }deg)`
                }} />

                <hr style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    left: props.id % 2 === 0 ? '35%' : 'auto',
                    right: props.id % 2 === 1 ? '35%' : 'auto',
                    width: '30px',
                    height: '2px',
                    background: 'red',
                    position: 'absolute',
                    transform: `translate(${(Math.pow(-1, props.id)) * (50/Math.sqrt(2))}px, -35px)`
                }} />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: props.id % 2 === 0 ? 'row' : 'row-reverse', }}>
                <Paper sx={{
                    p: '21px', width: '300px', height: 'auto',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
                    backdropFilter: 'blur(2.5px)', borderRadius: '10px', border: '.2px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    transform: `perspective(1000px) rotateY(${Math.pow(-1, props.id) * 25}deg) rotateX(10deg)`,
                }}>
                    <img style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', borderRadius: '8px' }} src={boltDemo} alt='bolt_demo.png' />
                </Paper>
            </Box>
        </Box>
    )
}
