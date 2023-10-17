import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { Route, Routes } from 'react-router-dom';
import beer from './images/beer.mp4';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
      <video src={beer} autoPlay loop muted />
        <Routes>
         <Route path="/home" element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
