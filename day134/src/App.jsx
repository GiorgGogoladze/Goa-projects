import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/home'
import CityCenter from './assets/CityCenter';
import Kerch from './assets/Kerch';
import GeorgianMovies from './assets/GeorgiaMoves';
import GeorgianSerials from './assets/GeorgianSerials';
import GeorgianDances from './assets/GeorgianDances';
import './App.css';
import './assets/home'; 
import './assets/CityCenter'; 
import './assets/Kerch'; 
import './assets/GeorgiaMoves'; 
import './assets/GeorgianSerials'; 
import './assets/GeorgianDances'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-center/*" element={<CityCenter />} />
        <Route path="/kerch/*" element={<Kerch />} />
        <Route path="/georgian-movies/*" element={<GeorgianMovies />} />
        <Route path="/georgian-serials/*" element={<GeorgianSerials />} />
        <Route path="/georgian-dances/*" element={<GeorgianDances />} />
      </Routes>
    </Router>
  );
}

export default App;
