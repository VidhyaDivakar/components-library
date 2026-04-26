// components/ProductDisplay/ProductDisplay.tsx
import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}) => {
  const handleAddToCart = () => {
    onAddToCart(product.id);
    alert(`Added product ${product.id} to cart`);
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6">
      
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>

        <p className="text-blue-600 font-medium mt-1">
          ${product.price}
        </p>

        {showDescription && (
          <p className="text-sm text-gray-600 mt-2">
            {product.description}
          </p>
        )}

        {showStockStatus && (
          <p className={`text-sm mt-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        )}
      </div>

      {/* Children (optional extra content) */}
      {children && (
        <div className="mt-3">
          {children}
        </div>
      )}

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
};