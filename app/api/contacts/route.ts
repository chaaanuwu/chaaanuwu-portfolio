import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contacts = await prisma.contacts.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(contacts);
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}