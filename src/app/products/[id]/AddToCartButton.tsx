'use client';

import { useCartStore } from '@/store/cartStore';
import { Product } from '@/models/Product';

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product._id.toString(),
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={!product.inStock}
      className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${
        product.inStock
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
    </button>
  );
} 