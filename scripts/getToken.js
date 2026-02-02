import { google } from "googleapis";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Define the scopes
const scopes = ["https://www.googleapis.com/auth/drive.file"];

// Generate the URL
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline", // gets refresh token
  scope: scopes,
});

console.log("Open this URL in your browser and authorize the app:");
console.log(authUrl);

// Create interface to read code from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for the code from Google
rl.question("Enter the code from that page here: ", async (code) => {
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    console.log("\n✅ Access Token:", tokens.access_token);
    console.log("🔄 Refresh Token:", tokens.refresh_token);
    console.log("\nSave these tokens somewhere safe!");
  } catch (err) {
    console.error("Error retrieving access token:", err);
  }
  rl.close();
});