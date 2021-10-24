/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TestCaseMode" AS ENUM ('final', 'sample');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('TypeScript', 'JavaScript', 'Haskell', 'Java', 'Cpp', 'Csharp', 'Fsharp', 'Go', 'C');

-- CreateEnum
CREATE TYPE "PuzzleMode" AS ENUM ('normal', 'reverse');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InitialTemplate" (
    "id" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "template" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestCase" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "assertion" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,
    "mode" "TestCaseMode" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puzzle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "constraint" TEXT NOT NULL,
    "inputDescription" TEXT NOT NULL,
    "outputDescription" TEXT NOT NULL,
    "mode" "PuzzleMode" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player.email_unique" ON "Player"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Player.username_unique" ON "Player"("username");

-- AddForeignKey
ALTER TABLE "InitialTemplate" ADD FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
