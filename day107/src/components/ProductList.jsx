import React from 'react';
import Product from './product';

function ProductList() {
  const products = [
    { name: 'iPhone 14', description: 'Latest Apple iPhone with A15 Bionic chip', price: 999 },
    { name: 'MacBook Pro', description: 'Powerful laptop with M1 Pro chip', price: 1999 },
    { name: 'Apple Watch', description: 'Smartwatch with health tracking', price: 399 },
  ];

  return (
    <div style={listStyle}>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

const listStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

export default ProductList;
