import React from 'react'
import { Link } from 'react-router-dom';
import Gmail from '../../resource/gmail.svg';
import CountUp from '../../components/CountUp';
import { styled, useTheme } from '@mui/material/styles';
import GmailColor from '../../resource/gmail-color.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'

export default function About(props) {
    
    const FooterGrid = styled((props) => <Grid component={Link} target='_blank' display='flex' gap='6px' alignItems='center' {...props} />)(
        ({ theme }) => ({
            textDecoration: 'none',
            '&:hover': {
                '& .InstaIconHover': {
                    color: 'white',
                    transition: 'all 150ms ease-in-out',
                    background: 'linear-gradient(135deg, #4f5bd5, #962fbf, #d62976, #fa7e1e, #feda75)',
                },
                '& .EmailIconHover': {
                    content: `url(${GmailColor})`,
                    transition: 'all 150ms ease-in-out',
                },
                '& .TextHover': {
                    color: 'white',
                    transition: 'all 150ms ease-in-out',
                },
            },
        })
    )

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('lp'))

    const countUps = [
        {
            name: 'servers',
            counts: 124
        },
        {
            name: 'commands',
            secondary: 'used',
            counts: 10144
        },
    ]

    return (
        <Grid container direction='column' mt='6em' justifyContent='center' id='about'>
            <Grid container mt='2em' direction={matches ? 'column' : 'row'} justifyContent='center' gap={matches ? '30px' : '300px'} alignItems='center'>
                {
                    countUps.map((countUp, id) => (
                        <CountUp countUp={countUp} key={id} />
                    ))
                }
            </Grid>
            {/* <Typography mt='3em'  variant='h2' textAlign='center'>Contact</Typography> */}
            <Grid item mt='10em' p='1em' component='form' display='flex' justifyContent='center' alignItems='center' width='100%' >
                <TextField component={Grid} mb={12} tb={8} lp={4} sx={
                    (theme) => ({
                        height: '100%',
                        '&:hover fieldset': {
                            borderColor: 'lightgrey !important'
                        },
                    })
                } placeholder='Suggestions here...' InputProps={{
                    style: {
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    }
                }} required />
                <Button type='submit' variant='contained' sx={{ height: '56px' }} endIcon={<KeyboardArrowRightIcon />} >submit</Button>
            </Grid>
            <Grid item mt='4em' mb='2em' display='flex' justifyContent='center' gap='18px' alignItems='center'>
                <FooterGrid to='https://www.instagram.com/_trickxer_/'>
                    <InstagramIcon className='InstaIconHover' sx={{
                        p: '1px',
                        color: 'gray',
                        borderRadius: '4px'
                    }} />
                    <Typography className='TextHover' variant='subtitle2'>Instagram</Typography>
                </FooterGrid>
                <FooterGrid to='mailto:kingkrabby10@gmail.com'>
                    <img className='EmailIconHover' src={Gmail} alt='' />
                    <Typography className='TextHover' variant='subtitle2'>Gmail</Typography>
                </FooterGrid>
            </Grid>
        </Grid>
    )
}
