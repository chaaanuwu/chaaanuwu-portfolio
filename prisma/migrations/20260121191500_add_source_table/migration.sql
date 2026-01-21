-- CreateTable
CREATE TABLE "public"."Sources" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "srcUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sources_pkey" PRIMARY KEY ("id")
);
