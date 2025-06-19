"use client";
import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-100 px-4 py-24">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-12 flex flex-col items-center max-w-lg w-full">
        <div className="bg-gradient-to-br from-fuchsia-500 via-orange-400 to-yellow-400 rounded-full p-6 mb-6 shadow-lg">
          <ExclamationTriangleIcon className="h-16 w-16 text-white drop-shadow" />
        </div>
        <h1 className="text-6xl font-extrabold text-fuchsia-700 mb-4 drop-shadow">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-center">
          Oops! The page you are looking for does not exist or has been moved.<br />
          Let's get you back to something stylish!
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-500 via-orange-400 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:from-fuchsia-600 hover:to-yellow-500 transition-colors text-lg"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
} 