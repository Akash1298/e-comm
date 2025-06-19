import Image from 'next/image';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import AddToCartButton from './AddToCartButton';
import { ProductType } from '@/types/product';

interface Props {
  params: {
    id: string;
  };
}

async function getProduct(id: string) {
  await connectDB();
  const product = await Product.findById(id);
  return product;
}

export default async function ProductPage({ params }: Props) {
  const productDoc = await getProduct(params.id);

  if (!productDoc) {
    notFound();
  }

  const product: ProductType = {
    _id: String(productDoc._id),
    title: productDoc.title,
    description: productDoc.description,
    price: productDoc.price,
    imageUrl: productDoc.imageUrl,
    inStock: productDoc.inStock,
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="relative h-96 lg:h-full">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <div
                className={`h-4 w-4 rounded-full ${
                  product.inStock > 0 ? 'bg-green-400' : 'bg-red-400'
                }`}
              />
              <p className="ml-2 text-sm text-gray-500">
                {product.inStock > 0 ? `${product.inStock} in stock` : 'Out of stock'}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
} 