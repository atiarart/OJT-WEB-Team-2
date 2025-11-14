import express from "express";
import {
  getDataPendaftar,
  getDataPendaftarById,
  createDataPendaftar,
  updateDataPendaftar,
  deleteDataPendaftar,
  uploadBuktiDanKonfirmasi 
} from "../controllers/DataPendaftarController.js";
import { uploadBuktiMiddleware } from "../middlewares/BuktiBayar.js"; 

const router = express.Router();

router.get("/data-pendaftar", getDataPendaftar);
router.get("/data-pendaftar/:id", getDataPendaftarById);
router.post("/data-pendaftar", createDataPendaftar);
router.put("/data-pendaftar/:id", updateDataPendaftar);
router.delete("/data-pendaftar/:id", deleteDataPendaftar);
router.post(
  "/data-peserta/konfirmasi", 
  uploadBuktiMiddleware.single('buktiDaftarUlang'), 
  uploadBuktiDanKonfirmasi
);

export default router;