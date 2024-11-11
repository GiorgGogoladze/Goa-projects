import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h2>Apple Company</h2>
      <nav>
        <a href="#home">Home</a> | <a href="#products">Products</a> | <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

export default Header;
