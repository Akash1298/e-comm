import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import connectDB from '@/lib/db';
import Product from '@/models/Product';

async function getProducts() {
  try {
    console.log('Attempting to connect to database...');
    await connectDB();
    console.log('Database connected, fetching products...');
    
    const products = await Product.find({}).sort({ createdAt: -1 });
    console.log('Products fetched:', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default async function ProductsPage() {
  try {
    const products = await getProducts();
    console.log('Products in page component:', products);

    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <Suspense fallback={<div>Loading products...</div>}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id.toString()} product={product} />
            ))}
          </div>
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error('Error in ProductsPage:', error);
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Error Loading Products</h1>
        <p className="text-red-500">Failed to load products. Please try again later.</p>
      </main>
    );
  }
} 