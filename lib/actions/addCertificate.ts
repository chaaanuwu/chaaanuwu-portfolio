// lib/actions/addCertificate.ts
"use server";

import { prisma } from "@/lib/prisma";
import { uploadFileToDrive } from "@/lib/uploadToDrive";

export async function addCertificate(formData: FormData) {
  const title = formData.get("title")?.toString();
  const issuer = formData.get("issuer")?.toString();
  const issuedDateStr = formData.get("issuedDate")?.toString();
  const issuedDate = issuedDateStr ? new Date(issuedDateStr) : null;
  const orderNo = formData.get("orderNo")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString(); // ✅ will now get URL from UploadButton
  const file = formData.get("file") as File | null;

  if (!title || !issuer || !issuedDate || !file) {
    throw new Error("All fields are required");
  }

  // Convert File to Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload to Google Drive
  const driveUrl = await uploadFileToDrive(buffer, file.name, file.type);

  // Save certificate in Neon
  await prisma.certificates.create({
    data: {
      name: title,
      issuer,
      issueDate: issuedDate,
      order: orderNo ? parseInt(orderNo) : undefined,
      imageUrl: imageUrl || "", // ✅ fallback to uploaded Drive URL
      credentialUrl: driveUrl,
    },
  });

  return { success: true, url: driveUrl };
};