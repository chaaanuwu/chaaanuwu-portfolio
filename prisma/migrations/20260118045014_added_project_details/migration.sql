-- CreateTable
CREATE TABLE "public"."ProjectDetails" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "intro" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "GithubUrl" TEXT,
    "liveUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDetails_projectId_key" ON "public"."ProjectDetails"("projectId");

-- AddForeignKey
ALTER TABLE "public"."ProjectDetails" ADD CONSTRAINT "ProjectDetails_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
