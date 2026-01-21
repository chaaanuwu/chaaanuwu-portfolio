import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const skills = await prisma.skills.findMany({
            orderBy: { Order: "asc"},
        });
        return NextResponse.json(skills);
    } catch (err) {
        console.log("Failed to fetch skills: ", err);
        return NextResponse.json({ error: "Failed to fetch skills"}, { status: 500 });
    }
}