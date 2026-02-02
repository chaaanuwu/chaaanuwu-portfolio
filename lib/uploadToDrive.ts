// lib/uploadToDrive.ts
import { getDriveClient } from "./googleDrive";
import { Readable } from "stream";

export async function uploadFileToDrive(buffer: Buffer, fileName: string, mimeType: string) {
  const drive = await getDriveClient();
  const stream = Readable.from(buffer);

  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      mimeType,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!], // your shared folder ID
    },
    media: {
      mimeType,
      body: stream,
    },
  });

  // Make file public
  await drive.permissions.create({
    fileId: response.data.id!,
    requestBody: { role: "reader", type: "anyone" },
  });

  return `https://drive.google.com/file/d/${response.data.id}/view`;
}