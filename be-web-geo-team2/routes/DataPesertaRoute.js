import express from "express";
import {
  getDataPeserta,
  getDataPesertaById,
  createDataPeserta,
  uploadSertifikatPeserta,
  getSertifikatByNomor,
} from "../controllers/DataPesertaController.js";
import { uploadMiddleware } from "../middlewares/Upload.js";

const router = express.Router();

router.get("/data-peserta", getDataPeserta);
router.get("/data-peserta/:id", getDataPesertaById);
router.post("/data-peserta", createDataPeserta);
router.post(
  "/data-peserta/upload/:id",
  uploadMiddleware.single("file"),
  uploadSertifikatPeserta
);
router.get("/sertifikat/:nomor", getSertifikatByNomor);

export default router;
