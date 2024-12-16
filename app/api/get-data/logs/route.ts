import connectDB from "@/config/db";
import { Log } from "@/models/collections";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 1;
export async function GET(req: NextRequest) {
	try {
		await connectDB();
		const logsData = await Log.find().sort({ _id: "desc" }).limit(100);
		return NextResponse.json({ logs: logsData });
	} catch (e) {
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
