import React from 'react';

function ProductItem({ product, addToCart,onDelete }) {
  const { id, name, price } = product;

  function handleDeleteProducts(e){
onDelete(product)
  }
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={handleDeleteProducts}>Delete</button>
    </div>
  );
}

export default ProductItem;