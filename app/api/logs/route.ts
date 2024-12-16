import connectDB from "@/config/db";
import { Log } from "@/models/collections";
import { ILog } from "@/types";
import httpStatus from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const requestBody = await req.json();
		const log = ILog.safeParse(requestBody);

		if (!log.success) {
			console.log("Validation error details:", log.error.format());
			return NextResponse.json(
				{
					status: false,
					message: "Validation failed",
					errorDetails: log.error.format(),
				},
				{ status: httpStatus.BAD_REQUEST }
			);
		}

		await connectDB();
		const createdLog = await Log.create(log.data);
		console.log("Log created:", createdLog);
		return NextResponse.json({
			status: true,
			message: "Data added successfully.",
			data: createdLog,
		});
	} catch (error) {
		console.error("Server error:", error);
		return NextResponse.json(
			{
				status: false,
				message: "An internal server error occurred.",
				errorDetails: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: httpStatus.INTERNAL_SERVER_ERROR }
		);
	}
}
