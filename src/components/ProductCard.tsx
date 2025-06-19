"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ProductType } from '@/types/product';

interface ProductCardProps {
  product: ProductType;
}
export default function ProductCard({ product }: ProductCardProps) {
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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <Link href={`/products/${product._id.toString()}`} className="block group">
        <div className="relative h-56 w-full bg-gradient-to-br from-indigo-100 to-pink-100">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/products/${product._id.toString()}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 hover:text-indigo-600 transition-colors duration-150">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ml-2 ${product.inStock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
          >
            {product.inStock > 0 ? `${product.inStock} in stock` : 'Out of stock'}
          </span>
        </div>
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className={`w-9 h-9 flex items-center justify-center rounded-full border text-xl font-bold transition-colors duration-150 ${
              quantity > 1 ? 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="min-w-[2rem] text-center text-base font-semibold select-none">
            {quantity}
          </span>
          <button
            onClick={handleIncrement}
            disabled={quantity >= product.inStock}
            className={`w-9 h-9 flex items-center justify-center rounded-full border text-xl font-bold transition-colors duration-150 ${
              quantity < product.inStock ? 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
} 