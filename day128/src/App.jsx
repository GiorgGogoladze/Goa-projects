import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShuaKalaki from './pages/ShuaKalaki';
import Kerchi from './pages/Kerchi';
import GeorgianMovies from './pages/GeorgianMovies';
import GeorgianSeries from './pages/GeorgianSeries';
import GeorgianDances from './pages/GeorgianDances';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shua-kalaki" element={<ShuaKalaki />} />
        <Route path="/kerchi" element={<Kerchi />} />
        <Route path="/georgian-movies" element={<GeorgianMovies />} />
        <Route path="/georgian-series" element={<GeorgianSeries />} />
        <Route path="/georgian-dances" element={<GeorgianDances />} />
      </Routes>
    </Router>
  );
}

export default App;
