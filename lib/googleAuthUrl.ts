// lib/googleAuthUrl.ts
import { getOAuth2Client } from "./googleDrive";

export function getGoogleAuthUrl() {
  const oAuth2Client = getOAuth2Client();

  return oAuth2Client.generateAuthUrl({
    access_type: "offline", // to get refresh_token
    scope: ["https://www.googleapis.com/auth/drive.file"],
    prompt: "consent", // ensures refresh_token is returned first time
  });
}