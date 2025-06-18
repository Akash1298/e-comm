import mongoose, { Document, Model, Types } from 'mongoose';

export interface Product extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

const productSchema = new mongoose.Schema<Product>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a product title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
      min: [0, 'Price cannot be negative'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide a product image URL'],
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product: Model<Product> = mongoose.models.Product || mongoose.model<Product>('Product', productSchema);

export default Product; 