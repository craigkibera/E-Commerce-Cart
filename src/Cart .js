import React from 'react';

function Cart({ cartItems }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total: </strong>${cartItems.reduce((total, item) => total + item.price, 0)}
      </p>
    </div>
  );
}

export default Cart;