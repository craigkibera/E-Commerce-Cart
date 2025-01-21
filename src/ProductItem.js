import React from 'react';

function ProductItem({ product, addToCart }) {
  const { id, name, price } = product;

  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;