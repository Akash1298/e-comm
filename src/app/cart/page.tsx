'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-sm">
                        <Link
                          href={`/products/${item.id}`}
                          className="font-medium text-gray-700 hover:text-gray-800"
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex-1 flex items-end justify-between">
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">
                        Quantity
                      </label>
                      <select
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="rounded-md border-gray-300 py-1.5 text-base leading-5 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      >
                        {Array.from({ length: item.inStock }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-base font-medium text-gray-900">
                  Order total
                </div>
                <div className="text-base font-medium text-gray-900">
                  ${totalPrice().toFixed(2)}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 