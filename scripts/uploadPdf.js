import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const drive = google.drive({ version: "v3", auth: oAuth2Client });

async function uploadPdf(filePath) {
  const fileName = filePath.split("/").pop();

  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      mimeType: "application/pdf",
    },
    media: {
      mimeType: "application/pdf",
      body: fs.createReadStream(filePath),
    },
  });

  console.log("Uploaded File ID:", response.data.id);
}

// Example usage
const filePath = path.join("certificates", "Code Alpha Web Development Quiz.pdf");
uploadPdf(filePath);