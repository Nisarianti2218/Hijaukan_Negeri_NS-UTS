import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET() {
    await dbConnect();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json({ posts });
}

export async function POST(req: Request) {
    await dbConnect();
    const { title, description, date, location, category, authorId, authorName, imageBase64 } = await req.json();
    
    if (!title || !description || !date || !location || !authorId || !authorName) {
        return NextResponse.json({ error: 'invalid' }, { status: 400 });
    }
    
    const post = await Post.create({ 
        title, 
        description, 
        date, 
        location, 
        category, 
        authorId, 
        authorName, 
        imageBase64 
    });
    
    return NextResponse.json({ post }, { status: 201 });
}