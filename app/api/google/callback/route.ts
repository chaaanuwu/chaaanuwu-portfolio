// app/api/google/callback/route.ts
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");
    if (!code) {
      return NextResponse.json({ error: "No code found" }, { status: 400 });
    }

    // Exchange code for tokens
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Save tokens in GoogleAuth table (single row)
    await prisma.googleAuth.upsert({
      where: { id: 1 },
      update: {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token ?? undefined,
      },
      create: {
        id: 1,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token ?? undefined,
      },
    });

    return NextResponse.redirect(new URL("/admin", req.url));
  } catch (err: any) {
    console.error("Google OAuth Callback Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}