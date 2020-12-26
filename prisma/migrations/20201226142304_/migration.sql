/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[zipcode]` on the table `Result`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Result.zipcode_unique" ON "Result"("zipcode");
