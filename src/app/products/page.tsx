import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { ProductType } from '@/types/product';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

async function getProducts(): Promise<ProductType[]> {
  await connectDB();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return products.map((product: any) => ({
    ...product,
    _id: product._id.toString(),
  }));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Discover our carefully curated collection of premium products. Find exactly what you're looking for with our easy-to-use filters.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        }>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Suspense>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 rounded-md bg-indigo-600 text-white">
              1
            </button>
            <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}