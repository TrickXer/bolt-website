import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';

function App() {

  let route_paths = []

  return (
    <>
      <NavBar />

      {/* <Routes>
        {
          route_paths.map(pages => (
            <Route path={ pages[0] } element={ pages[1] } />
          ))
        }
      </Routes> */}
    </>
  )
}

export default App;
