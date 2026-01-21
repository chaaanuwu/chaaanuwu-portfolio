import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Update the import path to the correct location of OurFileRouter
import type { OurFileRouter } from "../../app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();