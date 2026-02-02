import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await prisma.projects.findMany({
      include: {
        techStack: {
          include: {
            skill: true, // include each skill's data
          },
        },
        details: true, // include ProjectDetails
      },
      orderBy: {
        order: "asc",
      },
    });

    return NextResponse.json(projects);
  } catch (err) {
    console.log("Failed to fetch projects:", err);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}