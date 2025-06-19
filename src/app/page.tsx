import Link from 'next/link';
import { ShoppingBagIcon, SparklesIcon, TruckIcon, ShieldCheckIcon, FireIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-100">
      {/* Hero Section with full background image */}
      <section className="relative overflow-hidden shadow-xl min-h-[600px] flex items-center justify-center">
        {/* Full background image */}
        <img
          src="https://img.freepik.com/free-photo/surprised-man-showing-mobile-screen-shopping-bag-standing-against-yellow-background_1258-160889.jpg"
          alt="Surprised man shopping"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-7xl md:text-8xl animate-fade-in">
              Shop the Vibe
            </h1>
            <p className="mt-8 text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Unleash your style with our handpicked, trending products. Colorful. Bold. Unforgettable.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="group inline-flex items-center px-10 py-5 text-xl font-bold rounded-full text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 hover:from-pink-600 hover:to-yellow-500 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ShoppingBagIcon className="h-7 w-7 mr-2 group-hover:rotate-12 transition-transform" />
                Start Shopping
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-10 py-5 text-xl font-bold rounded-full text-fuchsia-600 bg-white/90 border-2 border-white/30 hover:bg-white transition-all duration-300 shadow-md"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <FireIcon className="h-8 w-8 text-orange-500 animate-bounce" />
            <h2 className="text-3xl font-extrabold text-fuchsia-700 tracking-tight">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example trending product cards (replace with dynamic data if needed) */}
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-all group">
                <div className="w-28 h-28 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-orange-300 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-4xl font-bold text-white">{String.fromCharCode(65 + i)}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Product {i}</h3>
                <p className="text-gray-500 text-sm mb-2 text-center">A vibrant, must-have item for your collection.</p>
                <span className="text-fuchsia-600 font-bold text-lg">${(29 + i * 10)}.99</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-fuchsia-700 mb-4 drop-shadow">Why Shop With Us?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experience a new era of shopping with our vibrant features and community.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white transform group-hover:rotate-12 transition-transform">
                  <SparklesIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Premium Quality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product is handpicked to ensure the highest standards of quality and craftsmanship.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white transform group-hover:rotate-12 transition-transform">
                  <TruckIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Lightning Fast Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get your orders delivered to your doorstep with our express shipping service.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white transform group-hover:rotate-12 transition-transform">
                  <ShieldCheckIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Secure Shopping
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shop with confidence with our state-of-the-art security and encryption.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white transform group-hover:rotate-12 transition-transform">
                  <UserGroupIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Community Driven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join a vibrant community of shoppers and get inspired by real reviews and stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-yellow-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-fuchsia-700 mb-4 drop-shadow">What Our Customers Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real stories from real people. We love our community!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-400 to-orange-300 flex items-center justify-center mb-4">
                  <StarIcon className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-gray-700 text-base mb-4 italic">“This is the best shopping experience I've ever had! The colors, the speed, the vibe—amazing!”</p>
                <span className="font-bold text-fuchsia-600">Customer {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-fuchsia-600 via-orange-500 to-yellow-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow">Stay in the Loop</h2>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe for exclusive offers, style tips, and the latest drops!
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white shadow-md"
                />
                <button className="px-8 py-3 bg-white text-fuchsia-600 rounded-full font-bold hover:bg-yellow-50 transition-colors shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
