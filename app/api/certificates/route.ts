import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const certificates = await prisma.certificates.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(certificates);
  } catch (err) {
    console.error("Failed to fetch certificates:", err);
    return NextResponse.json({ error: "Failed to fetch certificates" }, { status: 500 });
  }
}