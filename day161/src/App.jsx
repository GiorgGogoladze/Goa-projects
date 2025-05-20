import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/registerr';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app">
      {isLogin ? (
        <Login switchToRegister={() => setIsLogin(false)} />
      ) : (
        <Register switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
