import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, TextField, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

export default function About(props) {
    

    return (
        <Box id='about'>
            <Typography mt='2em' mb='2em' variant='h2' textAlign='center'>Contact</Typography>

            <Box component='form' display='flex' justifyContent='center' alignItems='center' height='56px'>
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
            <Box mt='6em' display='flex' justifyContent='center' alignItems='center'>
                <Box component={Link} target='_blank' to='https://www.instagram.com/_trickxer_/' sx={{ textDecoration: 'none' }} display='flex' gap='6px' alignItems='center'>
                    <InstagramIcon sx={{ color: 'gray' }} />
                    <Typography variant='subtitle2'>Instagram</Typography>
                </Box>
            </Box>
        </Box>
    )
}
