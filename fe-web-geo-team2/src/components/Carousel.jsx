import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      {location.pathname === "/" || location.pathname === "/beranda" ? (
        <div
          id="heroCarousel"
          className="carousel carousel-fade"
          data-bs-ride="carousel"
          data-aos="fade-up"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active ">
              <div
                className="d-flex align-items-center justify-content-center text-center text-light"
                style={{
                  height: "90vh",
                  backgroundImage: "url('image/carousel-3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0, 80, 50, 0.6)", // hijau gelap transparan
                  }}
                >
                  <div className="container ">
                    <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                      Mitra Terpercaya dalam Keselamatan dan Kepatuhan K3
                    </h1>
                    <p className="lead mb-4">
                      PT Geo Mandiri Kreasi menyediakan pelatihan K3
                      bersertifikasi dan layanan konsultasi untuk memastikan
                      lingkungan kerja Anda aman dan sesuai regulasi Kemenaker
                      RI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div
                className="d-flex align-items-center justify-content-center text-center text-light"
                style={{
                  height: "90vh",
                  backgroundImage: "url('image/carouse-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0, 80, 50, 0.6)",
                  }}
                >
                  <div className="container">
                    <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                      Pelatihan K3 Bersertifikat Resmi Kemenaker RI
                    </h1>
                    <p className="lead mb-4">
                      Kami menyelenggarakan berbagai program pelatihan seperti
                      Ahli K3 Umum, K3 Listrik, Operator Crane, dan lainnya —
                      dengan pengajar berpengalaman dan fasilitas lengkap.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="d-flex align-items-center justify-content-center text-center text-light"
                style={{
                  height: "90vh",
                  backgroundImage: "url('image/carousel.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0, 80, 50, 0.6)",
                  }}
                >
                  <div className="container">
                    <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                      Layanan Inspeksi dan Pengujian Peralatan Kerja
                    </h1>
                    <p className="lead mb-4">
                      Tenaga ahli kami melakukan riksa uji peralatan dan
                      lingkungan kerja untuk memastikan keselamatan dan
                      kepatuhan terhadap standar nasional dan internasional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Navigasi panah kiri/kanan */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      ) : null}
    </>
  );
}
