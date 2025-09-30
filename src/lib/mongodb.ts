import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = (globalThis as { mongoose?: MongooseCache }).mongoose;
if (!cached) {
  cached = (globalThis as { mongoose?: MongooseCache }).mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    // Skip database connection during build time
    if (!MONGODB_URI) {
        if (process.env.NODE_ENV === 'production') {
            throw new Error('MONGODB_URI is not set in production');
        }
        // Return a mock connection for build time
        return null;
    }
    
    if (cached!.conn) return cached!.conn;
    if (!cached!.promise) {
        cached!.promise = mongoose.connect(MONGODB_URI, { dbName: 'hijaukan_negeri' });
    }
    cached!.conn = await cached!.promise;
    return cached!.conn;
}
