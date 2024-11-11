import React from 'react';

function Button({ label, variant, onClick }) {
  const styles = {
    primary: { backgroundColor: '#007bff', color: '#fff' },
    secondary: { backgroundColor: '#6c757d', color: '#fff' },
    success: { backgroundColor: '#28a745', color: '#fff' },
  };

  return (
    <button
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        ...styles[variant], // სტილის გამოყენება ვერსიის მიხედვით
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
