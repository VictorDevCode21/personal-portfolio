-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "img_url" TEXT,
    "img_alt" TEXT,
    "project_url" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
