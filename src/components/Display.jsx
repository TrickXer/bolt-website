import React from 'react'
import boltDemo from '../resource/bolt_demo.png'
import { Box, Paper, Typography } from '@mui/material'

export default function Display(props) {
    

    return (
        <Box sx={{ mt: '2em', mb: '4em', width: '100%', display: 'flex', flexDirection: 'column', alignItems: props.id % 2 === 0 ? 'flex-start' : 'flex-end', justifyContent: 'center' }}> 
            <Typography variant='h3' sx={
                (theme) => ({
                    m: '.25em 1em', WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent',
                    [theme.breakpoints.down('tb')]: {
                        m: '.25em .5em', fontSize: '24px'
                    },
                    [theme.breakpoints.between('tb', 'lp')]: {
                        m: '.25em .5em', fontSize: '48px'
                    },
                })
            }>{props.title}</Typography>
            <Box sx={{ position: 'relative', width: '100%', display: 'inline-flex', flexDirection: props.id % 2 === 0 ? 'row' : 'row-reverse' }}>
                <hr className='LineHover' style={{
                    margin: 0,
                    border: 0,
                    padding: 0,
                    width: '35%',
                    height: '2px',
                    position: 'absolute',
                    background: `linear-gradient(${props.id % 2 === 0 ? 90 : 270 }deg, transparent 25%, red)`
                }} />

                <hr className='LineHover' style={{
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

                <hr className='LineHover' style={{
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
                    // display: 'flex',
                    borderRadius: '50%',
                    position: 'absolute',
                    border: '2px solid red',
                    left: props.id % 2 === 0 ? 'calc(35% + 30px)' : 'auto',
                    right: props.id % 2 === 1 ? 'calc(35% + 30px)' : 'auto',
                    // flexDirection: props.id % 2 === 0 ? 'row' : 'row-reverse',
                    transform: `translate(${(Math.pow(-1, props.id)) * (50 / Math.sqrt(2))}px, -38.5px)`
                }} />
            </Box>
            <Box sx={
                (theme) => ({
                    width: '100%', display: 'flex', flexDirection: props.id % 2 === 0 ? 'row' : 'row-reverse',
                    '&:hover': {
                        '& .CardHover': {
                            transform: 'rotateY(0deg) rotateX(0deg)',
                            transition: 'all 200ms ease-in-out'
                        },
                        '& .LineHover': {
                            background: 'transparent',
                            transition: 'all 200ms ease-in-out'
                        }
                    }
                })
             }>
                <Paper className='CardHover' sx={
                    (theme) => ({
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        p: '1.25em', width: '18.75em', height: 'auto',
                        [theme.breakpoints.down('tb')]: {
                            p: '.25em', width: '8em'
                        },
                        [theme.breakpoints.between('tb', 'lp')]: {
                            p: '.75em', width: '16.5em'
                        },
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
                        backdropFilter: 'blur(2.5px)', borderRadius: '10px', border: '.2px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                        transform: `perspective(1000px) rotateY(${Math.pow(-1, props.id) * 25}deg) rotateX(10deg)`,
                    })
                }>
                    <img style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', borderRadius: '8px' }} src={boltDemo} alt='bolt_demo.png' />
                </Paper>
            </Box>
        </Box>
    )
}
