import React from 'react'
import './HomePage.css'
import { products } from '../Product'; // Import the data
import ProductCard from '../Component/ProductCard'; // Import the component




const HomePage = ({onAddToCart}) => {
   return (
    <>
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
