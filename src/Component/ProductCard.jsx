import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  // State to store the selected quantity
  
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl p-4 shadow-sm w-full">
      <div className="flex justify-center items-center h-48 mb-4">
        <img className="max-h-full max-w-full object-contain"
          src={product.image}
          alt={product.name} />
      </div>

      <div className="text-lg font-semibold text-gray-800 mb-2 truncate">
        {product.name}
      </div>

      <div className="flex items-center mb-2">
        <img className="h-4"
          src={`images/ratings/rating-${product.rating.star * 10}.png`}
          alt={`Rating: ${product.rating.stars} stars`} />
        <div className="text-sm text-blue-500 font-medium ml-1 cursor-pointer hover:underline">
          {product.rating.count}
        </div>
      </div>

      <div className="text-md font-bold text-gray-700 mb-4">
        ${(product.priceCents / 100).toFixed(2)}
      </div>

      <select 
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        // onChange={handleQuantityChange}
      >
        {[...Array(10).keys()].map(i => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      
      {/* The onClick handler sends both the product ID and the selected quantity */}
      <button 
        onClick={() => onAddToCart(product.id)}
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
