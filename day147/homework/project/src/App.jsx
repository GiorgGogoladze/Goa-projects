import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CarDetails from "./CarDetails";
import "./app.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <header>
        <h1>MyAuto Clone</h1>
        <button className="toggle-btn" onClick={toggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <div className="car-list">
        <div className="car-card">
          <img src="./2018-camry-pricing_1.jpg"alt="Car" />
          <h2>Toyota Camry</h2>
          <p>Year: 2021 | Price: $25,000</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default App;