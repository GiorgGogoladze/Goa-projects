import React from 'react';

function Product({ name, description, price }) {
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

const productStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  margin: '10px',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

export default Product;
