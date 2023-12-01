import React from 'react'
import { Link } from 'react-router-dom';
import Gmail from '../../resource/gmail.svg';
import { styled } from '@mui/material/styles';
import GmailColor from '../../resource/gmail-color.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, TextField, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CountUp from '../../components/CountUp';

export default function About(props) {
    
    const FooterBox = styled((props) => <Box component={Link} target='_blank' display='flex' gap='6px' alignItems='center' {...props} />)(
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
        <Box id='about'>
            <Box mt='2em' display='flex' justifyContent='center' gap='300px' alignItems='center'>
                {
                    countUps.map((countUp, id) => (
                        <CountUp countUp={countUp} key={id} />
                    ))
                }
            </Box>
            {/* <Typography mt='3em'  variant='h2' textAlign='center'>Contact</Typography> */}
            <Box mt='10em' component='form' display='flex' justifyContent='center'  alignItems='center' height='56px'>
                <TextField sx={{
                    width: '30em', height: '100%',
                    '&:hover fieldset': {
                        borderColor: 'lightgrey !important'
                    },
                }} placeholder='Suggestions here...' InputProps={{
                    style: {
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    }
                }} required />
                <Button type='submit' variant='contained' sx={{ height: '100%' }} endIcon={<KeyboardArrowRightIcon />} >submit</Button>
            </Box>
            <Box mt='4em' display='flex' justifyContent='center' gap='18px' alignItems='center'>
                <FooterBox to='https://www.instagram.com/_trickxer_/'>
                    <InstagramIcon className='InstaIconHover' sx={{
                        p: '1px',
                        color: 'gray',
                        borderRadius: '4px'
                    }} />
                    <Typography className='TextHover' variant='subtitle2'>Instagram</Typography>
                </FooterBox>
                <FooterBox to='mailto:kingkrabby10@gmail.com'>
                    <img className='EmailIconHover' src={Gmail} alt='' />
                    <Typography className='TextHover' variant='subtitle2'>Gmail</Typography>
                </FooterBox>
            </Box>
        </Box>
    )
}
