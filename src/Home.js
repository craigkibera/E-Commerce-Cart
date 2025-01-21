import React, { useState } from 'react';
import ProductItem from './ProductItem'
import Cart from './Cart';


function Home() {
    const [cart,setCart] = useState([]);
    const products =[{ "id": 1, "name": "T-Shirt", "price": 20 },

        { "id": 2, "name": "Jeans", "price": 40 },
      
        { "id": 3, "name": "Sneakers", "price": 60 },
      
        { "id": 4, "name": "Hat", "price": 15 },
      
        { "id": 5, "name": "Socks", "price": 5 }]

        const addToCart = (product) => {
            setCart((prevCart) => [...prevCart, product]);
          };
        

        const product = products.map((item)=>
    (
        <ProductItem key={item.id}
        id={item.id} name={item.name}
        price={item.price} addToCart={addToCart} onDelete={handleDeleteProducts}/>
        
      ));
      function handleDeleteProducts(childData){
        console.log(childData)

        let newProducts =products.filter(filterItems)
        function filterItems(currItem){
          return currItem !== childData

        }
        console.log(newProducts)
        
      }
     return (
    <>
      <h1>List of products</h1>
      {product}
      <Cart cartItems={cart} />

       </>
    
  )
}

export default Home
