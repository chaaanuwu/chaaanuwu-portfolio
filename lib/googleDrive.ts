// lib/googleDrive.ts
import { google } from "googleapis";
import { prisma } from "./prisma";

export function getOAuth2Client() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
}

export async function getDriveClient() {
  const authRow = await prisma.googleAuth.findUnique({ where: { id: 1 } });
  if (!authRow || !authRow.accessToken || !authRow.refreshToken) {
    throw new Error("Google tokens not found or refresh token missing.");
  }

  const oAuth2Client = getOAuth2Client();
  oAuth2Client.setCredentials({
    access_token: authRow.accessToken,
    refresh_token: authRow.refreshToken,
  });

  // Force refresh the token
  const { credentials } = await oAuth2Client.refreshAccessToken();

  if (credentials.access_token && credentials.access_token !== authRow.accessToken) {
    // Save refreshed token to Neon
    await prisma.googleAuth.update({
      where: { id: authRow.id },
      data: { accessToken: credentials.access_token },
    });

    // Update OAuth2 client with new token
    oAuth2Client.setCredentials({
      access_token: credentials.access_token,
      refresh_token: authRow.refreshToken,
    });
  }

  return google.drive({ version: "v3", auth: oAuth2Client });
}