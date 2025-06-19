'use client';

import { useCartStore } from '@/store/cartStore';
import { ProductType } from '@/types/product';
import { useState } from 'react';

interface Props {
  product: ProductType;
}

export default function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const items = useCartStore((state) => state.items);
  const cartItem = items.find((i) => i.id === product._id.toString());
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    if (quantity < product.inStock) {
      if (cartItem) {
        updateQuantity(product._id.toString(), quantity + 1);
      } else {
        addItem({
          id: product._id.toString(),
          title: product.title,
          price: product.price,
          imageUrl: product.imageUrl,
          inStock: product.inStock,
        });
      }
    }
  };

  const handleDecrement = () => {
    if (cartItem && quantity > 1) {
      updateQuantity(product._id.toString(), quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleDecrement}
        disabled={quantity <= 1}
        className={`w-10 h-10 flex items-center justify-center rounded-full border text-2xl font-bold transition-colors duration-150 ${
          quantity > 1 ? 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
        }`}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="min-w-[2.5rem] text-center text-lg font-semibold select-none">
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        disabled={quantity >= product.inStock}
        className={`w-10 h-10 flex items-center justify-center rounded-full border text-2xl font-bold transition-colors duration-150 ${
          quantity < product.inStock ? 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
        }`}
        aria-label="Increase quantity"
      >
        +
      </button>
      <span className="ml-4 text-sm text-gray-500">
        {product.inStock > 0 ? `${product.inStock} in stock` : 'Out of stock'}
      </span>
    </div>
  );
} 