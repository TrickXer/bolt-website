import React from 'react'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { setCanChange, setValue } from '../redux/reducers/sections'

export default function Navbar(props) {
    const visibility = useSelector(state => state.visibility.value)
    
    const StyledTabs = styled((props) => <Tabs {...props} />)(
        ({ theme }) => ({
            '& .MuiTabs-indicator': {
                backgroundColor: 'transparent'
            }
        })
    )

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
            textTransform: 'capitalize',
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
                color: '#fff'
            }
        })
    )

    const tabs = ['home', 'features', 'about']
    const canChange = useSelector(state => state.sections.canChange)
    const value = useSelector(state => state.sections.value)
    const dispatch = useDispatch()

    const handleChange = (e, newValue) => {
        dispatch(setValue(newValue))
    }

    React.useEffect(() => {
        const element = document.getElementById(tabs[value])
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })

        setTimeout(() => {
            dispatch(setCanChange(true))
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, value, canChange])

    return (
        <Toolbar sx={{ backgroundColor: 'transparent', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
            <Typography sx={
                (theme) => ({
                    opacity: visibility ? 1 : 0,
                    transition: 'all 300ms ease-in-out',
                    transform: visibility ? 'translateY(0)' : 'translateY(15px)',
                    [theme.breakpoints.down('lp')]: {
                        opacity: 0
                    }
                })
            } ml='2.8em' variant='h2'>Bolt</Typography>
            <StyledTabs value={value} onClick={() => dispatch(setCanChange(false))} onChange={handleChange} sx={{ display: 'flex', justifySelf: 'center' }}>
                {
                    tabs.map((tab, id) => (
                        <StyledTab key={id} label={tab} />
                    ))
                }
            </StyledTabs>
        </Toolbar>
    )
}
