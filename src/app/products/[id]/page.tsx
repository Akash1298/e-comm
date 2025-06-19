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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center p-8">
          <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between p-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </span>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ml-2 ${product.inStock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {product.inStock > 0 ? `${product.inStock} in stock` : 'Out of stock'}
              </span>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {product.description}
              </p>
            </div>
            {/* Optionally, add highlights or features here */}
            {/* <ul className="mb-8 space-y-2">
              <li className="flex items-center text-sm text-gray-500"><span className="mr-2">•</span> Free shipping on orders over $50</li>
              <li className="flex items-center text-sm text-gray-500"><span className="mr-2">•</span> 30-day return policy</li>
            </ul> */}
          </div>
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
} 