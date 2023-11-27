import React, { useEffect } from 'react'
import boltDemo from '../../resource/bolt_demo.png'
import { Box, Button, Paper, ThemeProvider, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibility } from '../../redux/reducers/visibility'

export default function Home(props) {
    const theme = useTheme()
    
    const scrollTop = useSelector(state => state.scrollTop.value)
    const visibility = useSelector(state => state.visibility.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const boltHeader = document.getElementById('bolt-header')
        dispatch(setVisibility(boltHeader.offsetTop <= scrollTop))
    }, [dispatch, scrollTop])

    return (
        <ThemeProvider theme={theme}>
            <Box id='home' sx={{ p: '6em 12em', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ flex: '1 0 auto' }}>
                    <Typography sx={{ opacity: !visibility ? 1 : 0, transform: !visibility ? 'translateY(0)' : 'translateY(-50px)', transition: 'all 300ms ease-in-out' }} id='bolt-header' variant='h1'>Bolt</Typography>
                    <Typography sx={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }} variant='h2'>Discord Bot</Typography>

                    <Button sx={{
                        mt: '1em', textTransform: 'capitalize', letterSpacing: '.125em', color: 'inherit', backgroundColor: 'red',
                        '&:hover': { color: 'inherit', backgroundColor: 'red', transform: 'scale(1.1)' },
                        transition: 'all 150ms ease-in-out'
                    }}>Invite</Button>

                    <Typography variant='subtitle1' sx={{ mt: '42px', width: '45em', textAlign: 'left', letterSpacing: '.05em' }}>
                        Bolt is a computer program designed to automate, enhance, or perform various functions within the Discord messaging platform. Developed by TrixR, this bot can carry out tasks ranging from moderation and utility functions to entertainment and customization. It respond to specific commands from users, interact with Discord's API, and can be invited to servers to assist with tasks, provide information, or engage in interactive activities. Bolt contribute to the versatility and richness of Discord communities, offering features that go beyond the platform's built-in capabilities.
                    </Typography>
                </Box>

                <Paper sx={{
                    p: '42px', flex: '1 1 auto', width: '900px', height: 'auto',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'transparent', backdropFilter: 'blur(2.4px)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent)',
                    borderRadius: '20px', border: '2px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    transform: 'perspective(1000px) rotateY(-25deg) rotateX(10deg)'
                }} elevation={0}>
                    <img style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', borderRadius: '15px' }} src={boltDemo} alt='bolt_demo.png' />
                </Paper>
            </Box>
        </ThemeProvider>
    )
}
