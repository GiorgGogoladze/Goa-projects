import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to the Apple Products Website</h1>
      <ProductList />
    </div>
  );
}

export default App;
