import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import DataPendaftar from "./routes/DataPendaftarRoute.js";
import DaftarPelatihan from "./routes/DaftarPelatihanRoute.js"
import KategoriPelatihan from "./routes/KategoriPelatihanRoute.js"
import jadwalRoutes from "./routes/JadwalRoutes.js"

import AuthRoute from "./routes/AuthRoute.js"
import AdminRoute from "./routes/AdminRoute.js"

dotenv.config();

const app = express();

// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', DataPendaftar)
app.use('/api/daftar-pelatihan', DaftarPelatihan)
app.use("/api/kategori-pelatihan", KategoriPelatihan);
app.use("/api/jadwal", jadwalRoutes);

app.use('/api/auth', AuthRoute)
app.use('/api/admin', AdminRoute)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and is running ...');
});

