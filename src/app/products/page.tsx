import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { ProductType } from '@/types/product';

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Suspense>
    </main>
  );
}