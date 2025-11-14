import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDaftarPelatihan = async (req, res) => {
  try {
    const response = await prisma.daftar_pelatihan.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDaftarPelatihanById = async (req, res) => {
  try {
    const response = await prisma.daftar_pelatihan.findUnique({
      where: {
        id_pelatihan: parseInt(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createDaftarPelatihan = async (req, res) => {
  console.log("BACKEND MENERIMA:", req.body);

  const {
    id_kategori,
    nama_pelatihan,
    tujuan,
    persyaratan,
    materi_pembelajaran,
    instruktur,
    sertifikasi,
    metode_pembelajaran,
    biaya,
    fasilitas,
    contact,
  } = req.body;

  try {
    const DaftarPelatihan = await prisma.daftar_pelatihan.create({
      data: {
        id_kategori,
        nama_pelatihan,
        tujuan,
        persyaratan,
        materi_pembelajaran,
        instruktur,
        sertifikasi,
        metode_pembelajaran,
        biaya,
        fasilitas,
        contact,
      },
    });

    res.status(201).json({
      msg: "Daftar Pelatihan berhasil ditambahkan!",
      data: DaftarPelatihan,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateDaftarPelatihan = async (req, res) => {
  const { idPelatihan } = req.params;
  const {
    idKategori,
    namakategori,
    namaPelatihan,
    tujuan,
    persyaratan,
    materiPembelajaran,
    instruktur,
    sertifikasi,
    metodePembelajaran,
    biaya,
    fasilitas,
    contact,
  } = req.body;

  try {
    const DaftarPelatihan = await prisma.daftar_pelatihan.update({
      where: {
        id_pelatihan: parseInt(idPelatihan),
      },
      data: {
        id_kategori: parseInt(idKategori),
        nama_pelatihan: namaPelatihan,
        tujuan: tujuan,
        persyaratan: persyaratan,
        materi_pembelajaran: materiPembelajaran,
        instruktur: instruktur,
        sertifikasi: sertifikasi,
        metode_pembelajaran: metodePembelajaran,
        biaya: biaya,
        fasilitas: fasilitas,
        contact: contact,
      },
    });
    res.status(200).json({
      msg: "Daftar Pelatihan berhasil diperbaharui!",
      data: DaftarPelatihan,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDaftarPelatihan = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.daftar_pelatihan.delete({
      where: { id_pelatihan: parseInt(id) },
    });
    res.status(200).json({ msg: "Daftar Pelatihan berhasil dihapus!" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: "Data tidak ditemukan!" });
  }
};
