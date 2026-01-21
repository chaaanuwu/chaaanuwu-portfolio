import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getSession } from "@/lib/auth"; // <-- your custom session functions

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      // Use your custom session check
      const session = await getSession();

      if (!session || !session.username) {
        throw new UploadThingError("Unauthorized");
      }

      // Return metadata to onUploadComplete
      return { username: session.username };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for user:", metadata.username);
      console.log("file url", file.ufsUrl);

      return { uploadedBy: metadata.username };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;