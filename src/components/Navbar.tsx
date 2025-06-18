import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.totalItems());

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className={`flex items-center px-3 py-2 text-gray-900 hover:text-gray-600 ${
                isActive('/') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`flex items-center px-3 py-2 text-gray-900 hover:text-gray-600 ${
                isActive('/products') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Products
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-900 hover:text-gray-600"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              href="/login"
              className="p-2 text-gray-900 hover:text-gray-600"
            >
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 