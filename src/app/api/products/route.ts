import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { authenticateRequest, TokenPayload } from '@/lib/jwt';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
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

    const product = await Product.create({
      title,
      description,
      price,
      imageUrl,
      inStock: Number(inStock),
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
} 