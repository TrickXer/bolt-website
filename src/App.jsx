import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './screens/about/About';
import Features from './screens/features/Features';
import Home from './screens/home/Home';
import { useDispatch } from 'react-redux';
import { setScrollTop } from './redux/reducers/boltHeader';

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
        color: 'white'
      },
      h2: {
        fontSize: '60px',
        fontWeight: 600,
        color: 'white'
      }
    },
  })

  const dispatch = useDispatch()

  const handleScroll = (e) => {
    dispatch(setScrollTop(e.currentTarget.scrollTop))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div ons className='app'>
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
