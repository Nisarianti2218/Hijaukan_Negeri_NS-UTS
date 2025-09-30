import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error('MONGODB_URI is not set');

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached!.conn) return cached!.conn;
    if (!cached!.promise) {
        cached!.promise = mongoose.connect(MONGODB_URI, { dbName: 'hijaukan_negeri' });
    }
    cached!.conn = await cached!.promise;
    return cached!.conn;
}