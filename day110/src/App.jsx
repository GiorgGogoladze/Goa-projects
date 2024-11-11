import React from 'react';
import Button from './components/button';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>სხვადასხვა ვერსიის ღილაკები</h1>
      <Button label="Primary Button" variant="primary" onClick={() => alert('Primary clicked')} />
      <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary clicked')} />
      <Button label="Success Button" variant="success" onClick={() => alert('Success clicked')} />
    </div>
  );
}

export default App;
