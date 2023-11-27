import React from 'react'
import boltDemo from '../resource/bolt_demo.png'
import { Box, Paper, Typography } from '@mui/material'

export default function Display(props) {
    

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: props.id % 2 === 0 ? 'flex-start' : 'flex-end', justifyContent: 'center' }}>
            <Typography variant='h3' sx={{ m: '1.5rem 1rem', WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }}>{ props.title }</Typography>
            <Box sx={{ position: 'relative', width: '100%', display: 'inline-flex', flexDirection: props.id % 2 === 0 ? 'row' : 'row-reverse' }}>
                <hr style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    width: '35%',
                    height: '2px',
                    position: 'absolute',
                    background: `linear-gradient(${props.id % 2 === 0 ? 90 : 270 }deg, transparent 25%, red)`
                }} />

                <hr style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    width: '50px',
                    height: '2px',
                    background: 'red',
                    position: 'absolute',
                    left: props.id % 2 === 0 ? '35%' : 'auto',
                    right: props.id % 2 === 1 ? '35%' : 'auto',
                    transformOrigin: `${props.id % 2 === 0 ? 'left' : 'right' } top`,
                    transform: `rotate(${props.id % 2 === 0 ? -45 : 45 }deg)`
                }} />

                <hr style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    width: '30px',
                    height: '2px',
                    background: 'red',
                    position: 'absolute',
                    left: props.id % 2 === 0 ? '35%' : 'auto',
                    right: props.id % 2 === 1 ? '35%' : 'auto',
                    transform: `translate(${(Math.pow(-1, props.id)) * (50/Math.sqrt(2))}px, -35px)`
                }} />

                <div style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    position: 'absolute',
                    border: '2px solid red',
                    left: props.id % 2 === 0 ? 'calc(35% + 30px)' : 'auto',
                    right: props.id % 2 === 1 ? 'calc(35% + 30px)' : 'auto',
                    transform: `translate(${(Math.pow(-1, props.id)) * (50 / Math.sqrt(2))}px, -38.5px)`
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
