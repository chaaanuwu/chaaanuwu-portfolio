import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const pages = await prisma.pages.findMany({
            orderBy: { order: "asc" },
        });
        return NextResponse.json(pages);
    } catch (err) {
        console.error("Failed to fetch pages:", err);
        return NextResponse.json({ error: "Failed to fetch pages" }, { status: 500 });
    }
}