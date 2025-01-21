import React from 'react';

function ProductItem({ product, addToCart, onDelete }) {
  const { id, name, price } = product;

  const handleDelete = () => {
    onDelete(product);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ProductItem;
