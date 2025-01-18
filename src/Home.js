import React from 'react'
import ProductItem from './ProductItem'

function Home() {
    const products =[{ "id": 1, "name": "T-Shirt", "price": 20 },

        { "id": 2, "name": "Jeans", "price": 40 },
      
        { "id": 3, "name": "Sneakers", "price": 60 },
      
        { "id": 4, "name": "Hat", "price": 15 },
      
        { "id": 5, "name": "Socks", "price": 5 }]

        const product = products.map(itemClothes)

        function itemClothes(currItem,currIndex){
            return <ProductItem list={currItem}/>
        }
  return (
    <>
      <h1>List of products</h1>
      {product}
    </>
  )
}

export default Home
