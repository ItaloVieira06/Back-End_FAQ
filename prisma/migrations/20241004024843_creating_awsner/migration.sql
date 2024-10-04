-- CreateTable
CREATE TABLE "Awsner" (
    "id_awsner" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "awsmer_main" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    CONSTRAINT "Awsner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Awsner_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions" ("id_question") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Awsner_id_awsner_key" ON "Awsner"("id_awsner");
