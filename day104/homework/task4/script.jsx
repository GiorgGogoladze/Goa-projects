// App.jsx
import React from 'react';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Mini Website</h1>
      <Counter />
      <h2>My Favorite Movies</h2>
      <MovieList />
    </div>
  );
}

export default App;
