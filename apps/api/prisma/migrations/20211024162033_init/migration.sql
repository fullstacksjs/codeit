-- DropForeignKey
ALTER TABLE "InitialTemplate" DROP CONSTRAINT "InitialTemplate_puzzleId_fkey";

-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_puzzleId_fkey";

-- AddForeignKey
ALTER TABLE "InitialTemplate" ADD CONSTRAINT "InitialTemplate_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "InitialTemplate.puzzleId_language_unique" RENAME TO "InitialTemplate_puzzleId_language_key";

-- RenameIndex
ALTER INDEX "Player.email_unique" RENAME TO "Player_email_key";

-- RenameIndex
ALTER INDEX "Player.username_unique" RENAME TO "Player_username_key";
