import React from "react"                                           // import dari 
import "bootstrap/dist/css/bootstrap.min.css"                       // import dari folder bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Routes, Route, useLocation } from "react-router-dom"

// import halaman publik
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Beranda from "./pages/Beranda"
import Pelatihan from "./pages/Pelatihan"
import JadwalTraining from "./pages/JadwalTraining"
import Pendaftaran from "./pages/Pendaftaran"
import "./App.css"
import "./components/Navbar.css";
import "./components/Table.css";
import "./components/Footer.css";

// import halaman admin
import AuthPage from "./pages/admin/AuthPage"
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DataPendaftar from "./pages/admin/DataPendaftar";
import DataPendaftarEdit from "./pages/admin/DataPendaftarEdit";
import AdminApproval from "./pages/admin/AdminApproval";
import AdminNavbar from "./components/admin/AdminNavbar";
import { useAuth } from "./context/AuthContext"

import ProtectedRoute from "./routes/ProtectedRoute";
import SuperAdminRoute from "./routes/SuperAdminRoute";

export default function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const isAdminRoute = location.pathname.startsWith('/admin');

  const CurrentNavbar = () => {
    if (isAdminRoute && isAuthenticated) {
      return <AdminNavbar />
    }

    return <Navbar />
    }

  return (
    <>8
    <CurrentNavbar />
          <Routes>
            {/* Halaman publik*/}
            <Route path="/" element={<Beranda />} />
            <Route path="/pelatihan" element={<Pelatihan />} />
            <Route path="/jadwal-training" element={<JadwalTraining />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/admin" element={<AuthPage />} />

            {/* halaman admin yg bisa */}
            <Route path="/admin/dashboard" element={<ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>} />
            <Route path="/admin/data-pendaftar" element={<ProtectedRoute>
              <DataPendaftar />
              </ProtectedRoute>} />
            <Route path="/admin/data-pendaftar-edit/:id" element={<ProtectedRoute>
              <DataPendaftarEdit />
            </ProtectedRoute>} />

            {/* halaman khusus superadmin */}
            <Route path="/admin/approval" element={<SuperAdminRoute>
              <AdminApproval />
            </SuperAdminRoute>} />
        </Routes>
          </>
  )
}