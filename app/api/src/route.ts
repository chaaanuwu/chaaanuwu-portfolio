import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const sources = await prisma.sources.findMany();
        return NextResponse.json(sources);
    } catch (err) {
        console.error("Failed to fetch sources: ", err);
        return NextResponse.json({ error: "Failed to fetch sources" }, { status: 500 });
    }
}