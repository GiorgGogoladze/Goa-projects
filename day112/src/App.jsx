import React from 'react';
import './App.css'; 
import Header from './assets/components/header';
import Hero from './assets/components/Hero';
import About from './assets/components/about';
import Footer from './assets/components/footer';
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
