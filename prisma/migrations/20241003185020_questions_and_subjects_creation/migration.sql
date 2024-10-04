/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Subjects" (
    "id_subject" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Questions" (
    "id_question" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question_main" TEXT NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Questions_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subjects" ("id_subject") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Questions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_user_key" ON "Users"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Subjects_id_subject_key" ON "Subjects"("id_subject");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_id_question_key" ON "Questions"("id_question");
