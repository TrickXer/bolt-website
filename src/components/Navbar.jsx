import React from 'react'
import { styled } from '@mui/material/styles'
import { Tab, Tabs, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

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
    const [value, setValue] = React.useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    React.useEffect(() => {
        const element = document.getElementById(tabs[value])
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <ThemeProvider theme={props.theme}>
            <Toolbar sx={{ backgroundColor: 'transparent', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
                <Typography sx={{ opacity: visibility ? 1 : 0, transform: visibility ? 'translate(0)' : 'translateY(15px)', transition: 'all 300ms ease-in-out' }} ml='2.8em' variant='h2'>Bolt</Typography>
                <StyledTabs value={value} onChange={handleChange} sx={{ display: 'flex', justifySelf: 'center' }}>
                    {
                        tabs.map((tab, id) => (
                            <StyledTab key={id} label={tab} />
                        ))
                    }
                </StyledTabs>
            </Toolbar>
        </ThemeProvider>
    )
}
