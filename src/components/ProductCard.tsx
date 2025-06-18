import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/models/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product._id.toString(),
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product._id.toString()}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product._id.toString()}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              product.inStock
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
} 