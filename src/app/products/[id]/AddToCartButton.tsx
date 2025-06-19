'use client';

import { useCartStore } from '@/store/cartStore';
import { ProductType } from '@/types/product';

interface Props {
  product: ProductType;
}

export default function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const cartItem = items.find((i) => i.id === product._id.toString());
  const maxed = cartItem && cartItem.quantity >= product.inStock;

  const handleAddToCart = () => {
    addItem({
      id: product._id.toString(),
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      inStock: product.inStock,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={product.inStock < 1 || maxed}
      className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${
        product.inStock > 0 && !maxed
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      {product.inStock < 1 ? 'Out of Stock' : maxed ? `Max ${product.inStock} in Cart` : 'Add to Cart'}
    </button>
  );
} 