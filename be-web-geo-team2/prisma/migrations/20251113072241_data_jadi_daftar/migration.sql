/*
  Warnings:

  - You are about to drop the `data_pelatihan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `data_pelatihan` DROP FOREIGN KEY `data_pelatihan_id_kategori_fkey`;

-- DropForeignKey
ALTER TABLE `datapendaftar` DROP FOREIGN KEY `DataPendaftar_id_pelatihan_fkey`;

-- DropForeignKey
ALTER TABLE `jadwal` DROP FOREIGN KEY `Jadwal_id_pelatihan_fkey`;

-- DropIndex
DROP INDEX `DataPendaftar_id_pelatihan_fkey` ON `datapendaftar`;

-- DropIndex
DROP INDEX `Jadwal_id_pelatihan_fkey` ON `jadwal`;

-- DropTable
DROP TABLE `data_pelatihan`;

-- CreateTable
CREATE TABLE `daftar_pelatihan` (
    `id_pelatihan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pelatihan` VARCHAR(191) NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `persyaratan` VARCHAR(191) NOT NULL,
    `materi_pembelajaran` VARCHAR(191) NOT NULL,
    `instruktur` VARCHAR(191) NOT NULL,
    `sertifikasi` VARCHAR(191) NOT NULL,
    `metode_pembelajaran` VARCHAR(191) NOT NULL,
    `biaya` VARCHAR(191) NOT NULL DEFAULT '0',
    `fasilitas` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `id_kategori` INTEGER NOT NULL,

    PRIMARY KEY (`id_pelatihan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `daftar_pelatihan` ADD CONSTRAINT `daftar_pelatihan_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_pelatihan`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jadwal` ADD CONSTRAINT `Jadwal_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `daftar_pelatihan`(`id_pelatihan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataPendaftar` ADD CONSTRAINT `DataPendaftar_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `daftar_pelatihan`(`id_pelatihan`) ON DELETE CASCADE ON UPDATE CASCADE;
