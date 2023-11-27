import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './screens/about/About';
import Features from './screens/features/Features';
import Home from './screens/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollTop } from './redux/reducers/boltHeader';
import { setValue } from './redux/reducers/sections';

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Poppins',
      subtitle1: {
        fontWeight: 200,
        fontSize: '14px',
        color: 'lightgray',
      },
      h1: {
        fontWeight: 600,
        color: 'white',
        textTransform: 'capitalize'
      },
      h2: {
        fontSize: '60px',
        fontWeight: 600,
        color: 'white',
        textTransform: 'capitalize'
      },
      h3: {
        color: 'white',
        textTransform: 'capitalize'
      }
    },
  })

  const canChange = useSelector(state => state.sections.canChange)
  const dispatch = useDispatch()

  const handleScroll = (e) => {
    dispatch(setScrollTop(e.currentTarget.scrollTop))

    if (canChange) {
      const home = document.getElementById('home')
      const features = document.getElementById('features')
      const about = document.getElementById('about')
  
      const top = e.currentTarget.scrollTop + 72
      const bottom = e.currentTarget.scrollTop + window.innerHeight
  
      if (Math.floor(((home.offsetTop + home.offsetHeight - top) * 100) / bottom) > 10) dispatch(setValue(0))
      else if (Math.floor(((features.offsetTop + features.offsetHeight - top) * 100) / bottom) > 10) dispatch(setValue(1))
      else if (Math.floor(((about.offsetTop + about.offsetHeight - top) * 100) / bottom) > 10) dispatch(setValue(2))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <header>
          <Navbar theme={theme} />
        </header>

        <div onScroll={handleScroll} className="container">
          <div id='home'>
            <Home theme={theme} />
          </div>
          <div id='features'>
            <Features />
          </div>
          <div id='about'>
            <About />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
