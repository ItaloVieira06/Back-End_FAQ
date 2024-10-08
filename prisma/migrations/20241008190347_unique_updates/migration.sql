/*
  Warnings:

  - You are about to drop the column `awsmer_main` on the `Awsner` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Subjects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `awsner_main` to the `Awsner` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Awsner" (
    "id_awsner" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "awsner_main" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    CONSTRAINT "Awsner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Awsner_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions" ("id_question") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Awsner" ("id_awsner", "question_id", "user_id") SELECT "id_awsner", "question_id", "user_id" FROM "Awsner";
DROP TABLE "Awsner";
ALTER TABLE "new_Awsner" RENAME TO "Awsner";
CREATE UNIQUE INDEX "Awsner_id_awsner_key" ON "Awsner"("id_awsner");
CREATE UNIQUE INDEX "Awsner_user_id_key" ON "Awsner"("user_id");
CREATE UNIQUE INDEX "Awsner_question_id_key" ON "Awsner"("question_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Subjects_name_key" ON "Subjects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_name_key" ON "Users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
