import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import DataPendaftar from "./routes/DataPendaftarRoute.js";
import AuthRoute from "./routes/AuthRoute.js"

import AdminRoute from "./routes/AdminRoute.js"

dotenv.config();

const app = express();

// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', DataPendaftar)
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

