//@ts-nocheck
import mongoose from "mongoose";

const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!NEXT_PUBLIC_MONGODB_URI) {
	throw new Error(
		"Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local"
	);
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			connectTimeoutMS: 10000,
			socketTimeoutMS: 45000,
		};

		cached.promise = mongoose
			.connect(NEXT_PUBLIC_MONGODB_URI, opts)
			.then((mongoose) => mongoose.connection);
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		console.error("MongoDB connection error:", e);
		throw new Error("MongoDB connection error: " + e.message);
	}

	return cached.conn;
}

export default connectDB;
