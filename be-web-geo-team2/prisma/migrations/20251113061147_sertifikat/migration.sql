/*
  Warnings:

  - A unique constraint covering the columns `[nomorSertifikat]` on the table `DataPeserta` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `datapeserta` ADD COLUMN `fileSertifikat` VARCHAR(191) NULL,
    ADD COLUMN `nomorSertifikat` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `DataPeserta_nomorSertifikat_key` ON `DataPeserta`(`nomorSertifikat`);
