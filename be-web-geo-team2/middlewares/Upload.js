import multer from "multer";
import path from "path";
import fs from "fs";

// pastikan folder uploads/sertifikat ada
const uploadDir = "./uploads/sertifikat";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `sertifikat-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

// filter hanya PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(new Error("Hanya file PDF yang diizinkan!"), false);
};

// --- NAMA DIEKSPOR DIGANTI MENJADI uploadMiddleware ---
export const uploadMiddleware = multer({ storage, fileFilter });