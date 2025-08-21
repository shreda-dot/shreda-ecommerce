import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Component/Header';
import './HomePage.css'
import ProductCard from '../Component/ProductCard'; // Import the component




const HomePage = ({cart}) => {
  
  const [products, setProducts] = useState([])
  // useEffect(()=>{
  //    axios.get('/api/products')
  //   .then((response)=>{
  //     setProducts(response.data)
  //   })
  //   axios.get ('/api/cart-items')
  //   .then ((response)=>{
  //     SetCart(response.data)
  //   })
    
  // },[])
  const onAddToCart = (productId, quantity) => {
    // Make a POST request to your backend's cart-items endpoint.
    axios.post('/api/cart-items', {
      productId, // The ID of the product
      quantity   // The quantity from the select tag
    })
    .then(response => {
      // If the backend call is successful, update the local cart state
      // with the new data from the response.
      SetCart(response.data);
      console.log('Item added to cart:', response.data);
    })
    .catch(error => {
      console.error("There was an error adding the item to the cart!", error);
    });
  };

  useEffect(() => {
    // Fetch products
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });

    // Fetch cart items
   
  }, []); // The empty array ensures
 
   return (
    <>
      <Header cart={cart}/>
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {/* Use the map method to render a ProductCard for each item in the array */}
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
    </>
  );
};
export default HomePage
