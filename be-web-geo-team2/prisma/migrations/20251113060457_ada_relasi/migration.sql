/*
  Warnings:

  - You are about to drop the column `nama_kategori` on the `data_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `pelatihan` on the `datapendaftar` table. All the data in the column will be lost.
  - Added the required column `id_pelatihan` to the `DataPendaftar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_pelatihan` to the `Jadwal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_pelatihan` DROP COLUMN `nama_kategori`,
    MODIFY `biaya` VARCHAR(191) NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE `datapendaftar` DROP COLUMN `pelatihan`,
    ADD COLUMN `buktiBayar` VARCHAR(191) NULL,
    ADD COLUMN `id_pelatihan` INTEGER NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'MENUNGGU_BAYAR';

-- AlterTable
ALTER TABLE `jadwal` ADD COLUMN `id_pelatihan` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `DataPeserta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_data_pendaftar` INTEGER NOT NULL,
    `tanggal_konfirmasi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DataPeserta_id_data_pendaftar_key`(`id_data_pendaftar`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jadwal` ADD CONSTRAINT `Jadwal_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `data_pelatihan`(`id_pelatihan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataPendaftar` ADD CONSTRAINT `DataPendaftar_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `data_pelatihan`(`id_pelatihan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataPeserta` ADD CONSTRAINT `DataPeserta_id_data_pendaftar_fkey` FOREIGN KEY (`id_data_pendaftar`) REFERENCES `DataPendaftar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
