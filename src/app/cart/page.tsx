'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-50 to-blue-50">
        <div className="text-center bg-white/80 rounded-3xl shadow-2xl p-12 max-w-lg mx-auto">
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4 drop-shadow">Your cart is empty</h1>
          <p className="text-gray-500 mb-8 text-lg">Looks like you haven't added any items to your cart yet.</p>
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-50 to-blue-50 py-12 px-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center drop-shadow">Shopping Cart</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <ul className="bg-white/90 rounded-2xl shadow-xl divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col sm:flex-row py-6 px-4 sm:px-8 hover:bg-indigo-50/30 transition-colors">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="sm:ml-6 flex-1 flex flex-col justify-between mt-4 sm:mt-0">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                      <Link
                        href={`/products/${item.id}`}
                        className="font-bold text-lg text-gray-900 hover:text-indigo-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-2 sm:mt-0 text-lg font-semibold text-indigo-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2 max-w-xl">Qty: {item.quantity} &bull; In stock: {item.inStock}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          updateQuantity(item.id, item.quantity - 1);
                        } else {
                          removeItem(item.id);
                        }
                      }}
                      disabled={item.quantity < 1}
                      className={`w-9 h-9 flex items-center justify-center rounded-full border text-xl font-bold transition-colors duration-150 ${
                        item.quantity >= 1 ? 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="min-w-[2rem] text-center text-base font-semibold select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.inStock}
                      className={`w-9 h-9 flex items-center justify-center rounded-full border text-xl font-bold transition-colors duration-150 ${
                        item.quantity < item.inStock ? 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-1 text-base font-medium text-red-600 hover:text-white bg-red-100 hover:bg-red-500 rounded-lg px-3 py-2 transition-colors shadow-sm"
                    >
                      <TrashIcon className="h-5 w-5" />
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-white/90 rounded-2xl shadow-xl px-8 py-8 sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-700">Subtotal</span>
              <span className="text-lg font-semibold text-indigo-700">${totalPrice().toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 my-6"></div>
            <button
              type="button"
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 