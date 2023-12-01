import { Box, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function CountUp(props) {
    const countUp = props.countUp
    const constant = Math.floor(Math.log10(countUp.counts))
    const defaultValue = Math.pow(10, constant-2)

    const [count, setCount] = useState(defaultValue)
    
    const counts = {
        roundValue: Math.pow(10, constant),
        value: countUp.counts
    }

    useEffect(() => {
        setTimeout(() => {
            count < counts.roundValue && setCount(prev => prev + (1*defaultValue))
        }, 10);
    }, [count, counts.roundValue, defaultValue])

    return (
        <Box mt='4em' sx={{ cursor: 'pointer' }}>
            <Typography color='gray' variant='h3'>{countUp.name}</Typography>
            <Box display='flex' alignItems='flex-end'>
                <Tooltip title={counts.value} sx={{ width: '100%' }}>
                    <Typography mt='1em' variant='h2' textAlign='center'>{count}+</Typography>
                </Tooltip>
                <Typography variant='subtitle2'>{countUp.secondary}</Typography>
            </Box>
        </Box>
    )
}
