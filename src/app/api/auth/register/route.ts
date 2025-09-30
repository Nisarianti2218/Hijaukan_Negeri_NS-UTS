import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return NextResponse.json({ error: 'Email sudah terdaftar' }, { status: 409 });
  }

  const user = await User.create({ name, email, password });
  return NextResponse.json(
    { user: { id: user._id.toString(), name: user.name, email: user.email, createdAt: user.createdAt } },
    { status: 201 }
  );
}


