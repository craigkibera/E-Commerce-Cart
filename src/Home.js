import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Cart from './Cart';

function Home() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 40 },
    { id: 3, name: 'Sneakers', price: 60 },
    { id: 4, name: 'Hat', price: 15 },
    { id: 5, name: 'Socks', price: 5 },
  ]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleDeleteProducts = (childData) => {
    const newProducts = products.filter((currItem) => currItem.id !== childData.id);
    setProducts(newProducts);
  };

  return (
    <>
      <h1>List of products</h1>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          addToCart={addToCart}
          onDelete={handleDeleteProducts}
        />
      ))}
      <Cart cartItems={cart} />
    </>
  );
}

export default Home;
