
import './Beranda.css'
import React, { useEffect } from "react";// ⬅️ Tambahkan ini
import Aos from 'aos';
import "aos/dist/aos.css";
import Carousel from '../components/Caraosel';

export default function Beranda() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false,
    easing: "ease-in-out", // transisi lebih smooth
    offset: 100,});
  }, []);

  return (
  <div>

    <Carousel />
    
    <div className="features-section py-5 " data-aos="fade-up">
  <div className="container">

    <div className="row text-center gy-5">
      {/* Fitur 1 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-people fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Safety Training</h5>
          <p className="text-muted small">
            Training dan Konsultan K3 Lainnya...
          </p>
          <button className="btn btn-warning rounded-pill px-4 mt-2">
            Detail
          </button>
        </div>
      </div>

      {/* Fitur 2 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-arrow-repeat fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Training SDM</h5>
          <p className="text-muted small">
            Soft Skill, Leadership, Management, Tim Building, ITC.
          </p>
          <button className="btn btn-warning rounded-pill px-4 mt-2">
            Detail
          </button>
        </div>
      </div>

      {/* Fitur 3 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-life-preserver fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Divisi Consultant</h5>
          <p className="text-muted small">
            Konsultan Perencanaan & Tata Ruang, Survey & Teknologi IT.
          </p>
          <button className="btn btn-warning rounded-pill px-4 mt-2">
            Detail
          </button>
        </div>
      </div>

      {/* Fitur 4 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-currency-dollar fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Event Organizer</h5>
          <p className="text-muted small">
            Corporate Event, Family Gathering, Publikasi & Promosi.
          </p>
          <button className="btn btn-warning rounded-pill px-4 mt-2">
            Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Bagian About */}
<div className="container mt-5 py-5" data-aos="fade-up">
  <div className="row align-items-center">
    {/* Kolom Gambar - Sebelah Kiri */}
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img
        src="/image/Capture.JPG"
        className="img-fluid rounded shadow-lg w-100"
        alt="Tentang Geo Mandiri Kreasi"
      />
    </div>

    {/* Kolom Teks - Sebelah Kanan */}
    <div className="col-md-6">
      <h2 className="fw-bold mb-3">Selamat Datang di Geo Mandiri Kreasi</h2>
      <p className="text-muted mb-4">
        PT Geo Mandiri Kreasi adalah perusahaan yang bergerak di bidang 
        <strong> konsultasi, pelatihan, dan jasa inspeksi terkait 
        Keselamatan dan Kesehatan Kerja (K3) serta konstruksi</strong>. 
        Sebagai badan usaha resmi dan tersertifikasi, kami berkomitmen untuk 
        mendukung terciptanya lingkungan kerja yang aman, efisien, dan sesuai regulasi.
      </p>

      {/* Daftar dengan ikon centang */}
      <ul className="list-unstyled mb-4">
        <li className="d-flex align-items-start mb-2">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Terdaftar sebagai <strong>PJK3 resmi</strong> dan anggota INKINDO DKI Jakarta</span>
        </li>
        <li className="d-flex align-items-start mb-2">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Menyediakan <strong>pelatihan K3 bersertifikasi Kemenaker RI</strong></span>
        </li>
        <li className="d-flex align-items-start mb-2">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Layanan <strong>konsultasi dan inspeksi K3</strong> terpercayan</span>
        </li>
        <li className="d-flex align-items-start">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Berorientasi pada <strong>keselamatan, kualitas, dan kepatuhan</strong></span>
        </li>
      </ul>

      <a href="#" className="btn btn-success text-white fw-semibold px-4">
        Pelajari Lebih Lanjut
      </a>
    </div>
  </div>
</div>


    {/* Bagian Info K3 */}
<div
  className="container-fluid py-5"
  style={{
    background: "linear-gradient(135deg, #006d3b, #009e60)", // gradasi hijau
    color: "#fff",
  }}
  data-aos="fade-up"
>
  <div className="container">
    <div className="row align-items-center g-4">
      {/* Kolom Kiri - Teks */}
      <div className="col-lg-6">
        <small className="fw-semibold text-light opacity-75">
          Pelatihan & Sertifikasi
        </small>
        <h1 className="fw-bold mt-2" style={{ lineHeight: "1.2" }}>
          INFORMASI PELATIHAN K3 <br /> SERTIFIKASI KEMNAKER & BNSP
        </h1>
        <p className="mt-4" style={{ lineHeight: "1.8", color: "#e0f2e9" }}>
          Setiap perusahaan di Indonesia wajib menerapkan K3 di lingkungan
          kerjanya. Kini, pelatihan dan sertifikasi K3 juga dapat dilakukan
          secara online, seperti yang diselenggarakan oleh{" "}
          <span className="fw-semibold text-white">PT GEO MANDIRI KREASI</span> di
          Jakarta.
        </p>

        <p style={{ lineHeight: "1.8", color: "#e0f2e9" }}>
          Pelatihan ini membantu tenaga kerja memahami dan menerapkan prinsip
          keselamatan serta kesehatan kerja di berbagai bidang industri — mulai
          dari ahli K3, operator, hingga teknisi.
        </p>

        <div className="mt-4">
          <a
            href="#"
            className="btn fw-semibold px-4 py-2 rounded-1 shadow-sm"
            style={{
              backgroundColor: "#fff",
              color: "#006d3b",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#004d2c";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#006d3b";
            }}
          >
            Daftar Pelatihan Sekarang
          </a>
        </div>
      </div>

      {/* Kolom Kanan - Gambar Kolase */}
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6">
            <img
              src="image/foto-geo.jpg"
              className="img-fluid rounded-3 shadow-sm"
              alt="Pelatihan K3"
            />
            <img
              src="image/foto-geo-6.jpg"
              className="img-fluid rounded-3 shadow-sm mt-3"
              alt="Pelatihan K3"
            />
          </div>
          <div className="col-6">
            <img
              src="image/foto-geo-2.jpg"
              className="img-fluid rounded-3 shadow-sm mb-3"
              alt="K3 Safety"
            />
            <img
              src="image/foto-geo-4.jpg"
              className="img-fluid rounded-3 shadow-sm"
              alt="Worker"
            />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Testimoni */}
<div className="container my-5 py-5" data-aos="fade-up">
  <div className="text-center mb-5">
    <h2 className="fw-bold text-dark">TESTIMONIALS</h2>
    <p className="text-muted">Pendapat Klien Kami</p>
  </div>

  <div className="row g-4">
    {/* Testimoni 1 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Gabungan teori dan praktek membuat pelatihan menjadi menarik
          dan berkesan serta alat untuk prakteknya lengkap sehingga
          ketika ujian saya bisa kerjakan dengan lancar.”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Dita L. Fajarwati</h6>
            <small className="text-muted">PT. Bintang Toedjoe</small>
          </div>
        </div>
      </div>
    </div>

    {/* Testimoni 2 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Instruktur sangat berpengalaman di bidangnya, membuat pelatihan
          P3K yang saya ikuti menjadi sangat menyenangkan dan mendapat ilmu
          yang luar biasa”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang-2.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Lutfi Ulpah</h6>
            <small className="text-muted">PT. Happy indonesia</small>
          </div>
        </div>
      </div>
    </div>

    {/* Testimoni 3 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Ruangan dan tempat pelatiihan strategis,
          mudah dijangkau oleh transportasi.”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang-3.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Sodikin</h6>
            <small className="text-muted">PT. Tetsu Sarana Persada</small>
          </div>
        </div>
      </div>
    </div>

    {/* Testimoni 4 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Training seperti ini mesti harus banyak di lakukan agar SDM
          menjadi lebih berkualitas.”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang-4.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Pujo Warsito</h6>
            <small className="text-muted">PT. Triteguh Manunggal Sejati</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Bagian News */}
<div className="container my-5" data-aos="fade-up">
  <div className="text-center mb-5">
    <h2 className="fw-bold">Berita Perusahaan</h2>
    <p className="text-muted">Lihat perkembangan terbaru dan kegiatan kami</p>
  </div>

  <div className="row g-4">
    {/* Kolom Kiri - Berita Utama */}
    <div className="col-lg-8">
      <div className="card border-0 shadow-sm">
        <img
          src="https://source.unsplash.com/900x500/?business,coffee"
          className="card-img-top rounded-top"
          alt="Berita Utama"
        />
        <div className="card-body">
          <h4 className="fw-bold">
            Curabitur ut felis vel mi finibus – post with text and image blocks
          </h4>
          <p className="text-secondary">
            Dofelis vel mi finibus pretium nec pretium tellus. Donec a purus
            vehicula, fringilla ligula ac, posuere nisi. Cras nisl lacus,
            volutpat a odio posuere, iaculis sollicitudin purus.
          </p>
          <a href="#" className="btn btn-success rounded-pill px-3 py-2">
            Read more →
          </a>
        </div>
      </div>
    </div>

    {/* Kolom Kanan - Daftar Berita Lain */}
    <div className="col-lg-4">
      <div className="d-flex flex-column gap-4">
        {/* Item 1 */}
        <div className="d-flex">
          <img
            src="https://source.unsplash.com/200x140/?art,design"
            className="rounded me-3"
            style={{ width: "120px", height: "80px", objectFit: "cover" }}
            alt="Berita 1"
          />
          <div>
            <h6 className="fw-bold mb-1">
              Ut vulputate accumsan – post with images
            </h6>
            <small className="text-success">Marketing</small>
            <br />
            <small className="text-muted">8 November 2025</small>
          </div>
        </div>

        {/* Item 2 */}
        <div className="d-flex">
          <img
            src="https://source.unsplash.com/200x140/?office,team"
            className="rounded me-3"
            style={{ width: "120px", height: "80px", objectFit: "cover" }}
            alt="Berita 2"
          />
          <div>
            <h6 className="fw-bold mb-1">
              Morbi mi neque consecte tur – post with lists
            </h6>
            <small className="text-success">Business</small>
            <br />
            <small className="text-muted">7 November 2025</small>
          </div>
        </div>

        {/* Item 3 */}
        <div className="d-flex">
          <img
            src="https://source.unsplash.com/200x140/?work,desk"
            className="rounded me-3"
            style={{ width: "120px", height: "80px", objectFit: "cover" }}
            alt="Berita 3"
          />
          <div>
            <h6 className="fw-bold mb-1">
              Nulla glavrida – post with images & text
            </h6>
            <small className="text-success">Business</small>
            <br />
            <small className="text-muted">7 November 2025</small>
          </div>
        </div>
      </div>

      {/* Tombol Lihat Semua */}
      <div className="text-center mt-5">
        <a
          href="/berita"
          className="btn btn-warning text-white fw-semibold px-4 py-2 shadow-sm rounded-pill"
        >
          Lihat Semua Berita
        </a>
      </div>
    </div>
  </div>
</div>

      {/* Bagian Partner / Klien */}
<div className="container-fluid py-5" data-aos="fade-up" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="text-center mb-5">
    <h2 className="fw-bold text-dark">We are proud to work with these companies</h2>
  </div>

  {/* Wrapper animasi */}
  <div className="logo-slider">
    <div className="slide-track">
      {/* Ulang logo 2x supaya looping-nya halus */}
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <div className="slide"><img src="/image/logo1.png" alt="Logo 1" /></div>
          <div className="slide"><img src="/image/logo2.png" alt="Logo 2" /></div>
          <div className="slide"><img src="/image/logo3.png" alt="Logo 3" /></div>
          <div className="slide"><img src="/image/logo4.png" alt="Logo 4" /></div>
          <div className="slide"><img src="/image/logo5.png" alt="Logo 5" /></div>
          <div className="slide"><img src="/image/logo6.png" alt="Logo 6" /></div>
          <div className="slide"><img src="/image/logo7.png" alt="Logo 7" /></div>
          <div className="slide"><img src="/image/logo8.png" alt="Logo 8" /></div>
        </React.Fragment>
      ))}
    </div>
  </div>
</div>



      <footer
      className="text-light pt-5 pb-3 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #006d3b, #009e60)", // hijau tua toska gelap
      }}
      data-aos="fade-up"
    >
      {/* Dekorasi lingkaran */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "100px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      ></div>

      <div className="container position-relative">
        <div className="row gy-3 align-items-start">
          {/* Kolom 1 - Logo & Info */}
          <div className="col-md-4 " style={{ marginTop: "-20px" }}>
            <div className="d-flex align-items-center mb-2">
              <img
                src="/image/logo-geo.png"
                alt="Logo"
                style={{ height: "100px", marginRight: "10px", paddingTop: "10px"}}
              />
              <h5 className="m-0 fw-bold text-light">PT Geo Mandiri Kreasi</h5>
            </div>
            <p className="text-muted-light small mb-4">
              PT Geo Mandiri Kreasi adalah perusahaan yang bergerak di bidang
              konsultan, pelatihan K3, dan event management. Kami berkomitmen
              untuk memberikan pelayanan terbaik dengan profesionalisme tinggi.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2 - Pusat Pelatihan & Kontak */}
<div className="col-md-4">
  <h6 className="fw-bold text-light mb-3">Pusat Pelatihan</h6>
  <ul className="list-unstyled small text-muted-light">
    <li className="mb-2">
      <span className="text-muted-light">
        Rukan Kaca Hijau, Jl. Raya Jatirwaringin No. 6C
      </span>
    </li>
    <li className="mb-2">
      <strong className="text-light">Telepon:</strong>{" "}
      <a
        href="tel:0218621510"
        className="text-muted-light text-decoration-none"
        onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
        onMouseLeave={(e) => (e.target.style.color = "#aaa")}
      >
        021 862 1510
      </a>
    </li>
    <li className="mb-2">
      <strong className="text-light">Email:</strong>{" "}
      <a
        href="mailto:info@geomandiri.co.id"
        className="text-muted-light text-decoration-none"
        onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
        onMouseLeave={(e) => (e.target.style.color = "#aaa")}
      >
        info@geomandiri.co.id
      </a>
    </li>
  </ul>
</div>


          {/* Kolom 3 - Stay Connected */}
          <div className="col-md-4">
            <h6 className="fw-bold text-light mb-3">Stay Connected</h6>
            <p className="text-muted-light small">
              Daftarkan email Anda untuk mendapatkan informasi dan tips terbaru
              seputar layanan kami serta pelatihan K3.
            </p>
            <button
              className="btn btn-warning fw-semibold mt-2"
              style={{
                color: "#fff",
                borderRadius: "30px",
                padding: "8px 22px",
              }}
            >
              Daftar Newsletter
            </button>
          </div>
        </div>

        {/* Garis bawah */}
        <hr className="border mt-5" />

        {/* Copyright */}
        <div className="text-center text-muted-light small text-light">
          © 2025 PT Geo Mandiri Kreasi. All rights reserved. | Powered by{" "}
          <span style={{ color: "#00bfa5" }}>GeoMandiri</span>
        </div>
      </div>
    </footer>

  </div>



  )}

