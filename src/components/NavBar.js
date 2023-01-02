import { AppBar, Link, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import pfp from '../images/Bolt.jpg'
import React, { useState } from 'react'

export function NavBar(props) {
    
    let bot_name = 'Bolt'
    let tabs = [['home', '/'], ['commands', '/commands'], ['updates', '/updates'], ['about', '/about']]
    const [Hovered, setHovered] = useState(false)

    return (
        <>
            <AppBar sx={{ display: 'block', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'black' }}>
                <Toolbar sx={{ padding: '15px 10px' }}>
                    <img onMouseOut={ () => setHovered(false) } onMouseOver={ () => setHovered(true) } style={{ transform: `${ Hovered ? 'scale(1.1, 1.1)' : 'scale(1, 1)' }`, height: '10vh', border: `${ Hovered ? '3px solid green' : '3px solid transparent'}`, borderRadius: '50%' }} src={ pfp } alt='Bolt.jpg' />
                    <Typography sx={{ padding: '1vh 1vw', fontSize: { xl: '50px' } }}>{ bot_name }</Typography>
                    <Tabs textColor='inherit' indicatorColor='primary'>
                        {
                            tabs.map(tab => (
                                <Tab component={ Link } to={ tab[1] } label={ tab[0] } />
                            ))
                        }
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}
