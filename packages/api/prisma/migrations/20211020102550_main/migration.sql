/*
  Warnings:

  - A unique constraint covering the columns `[puzzleId,language]` on the table `InitialTemplate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InitialTemplate.puzzleId_language_unique" ON "InitialTemplate"("puzzleId", "language");
