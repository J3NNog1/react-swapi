import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Header  from './components/Header/Header';
import AllShips from './pages/Allships/AllShips';
import ShipDetails from './pages/ShipDetails/ShipDetails';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route 
      path='/'
      element={<AllShips />}
      >
      </Route>
      <Route 
      path='/ships'
      element={<ShipDetails />}
      >
      </Route>
      
    </Routes>
    <AllShips />
    </>
  ) 
}

export default App;
