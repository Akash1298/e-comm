import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { authenticateRequest } from '@/lib/jwt';

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const auth = await authenticateRequest(req);
    if (auth instanceof NextResponse) {
      return auth;
    }

    if (!auth.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const { title, description, price, imageUrl, inStock } = await req.json();

    const product = await Product.findByIdAndUpdate(
      params.id,
      {
        title,
        description,
        price,
        imageUrl,
        inStock: Number(inStock),
      },
      { new: true, runValidators: true }
    );

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const auth = await authenticateRequest(req);
    if (auth instanceof NextResponse) {
      return auth;
    }

    if (!auth.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const product = await Product.findByIdAndDelete(params.id);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
} 