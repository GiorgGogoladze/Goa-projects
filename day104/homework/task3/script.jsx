import React from 'react';

const Navbar = () => {
  const arrNav = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav>
      <ul>
        {arrNav.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
