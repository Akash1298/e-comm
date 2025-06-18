import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ProductType extends Document {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

const productSchema = new Schema<ProductType>({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  imageUrl: { type: String, required: true, trim: true },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

const Product = (mongoose.models.Product as Model<ProductType>) || mongoose.model<ProductType>('Product', productSchema);

export default Product;