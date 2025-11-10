import logo from "../assets/Logo Group.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <div className="row-main">
            <img src={logo} alt="Logo Perusahaan" />
            <div className="col-alamat">
              <h4>PT. Geo Mandiri Kreasi</h4>
              <p>
                <b>Pusat Pelatihan </b>: Rukan Kaca Hijau Jl. Raya Jatiwaringin
                No. 6C
              </p>
              <p>
                <b>Telepon </b>: 021 862 1510
              </p>
              <p>
                <b>Support </b>: info@geomandiri.co.id
              </p>
            </div>
            <div className="sosmed">
              <ul>
                <li>
                  <a href="instagram.com">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-body">
            <div className="col-body">
              <div className="about">
                <h4>Tentang Kami</h4>
                <p>
                  Kami PT. GEO MANDIRI KREASI Management Consultant, Training
                  Centre & Event Management yang terdiri dari gabungan
                  intelektual yang professional pada disiplin masing-masing,
                  akan sanggup memberikan jasa pelayanan konsultansi secara
                  professional, objektif dalam lingkup pelayanan jasa
                  konsultansi.
                </p>
              </div>
              <div className="fitur">
                <h4>Fitur</h4>
                <ul>
                    <li>
                        <a href="">Pendaftaran</a>
                    </li>
                    <li>
                        <a href="">Galeri GMK</a>
                    </li>
                    <li>
                        <a href="">Sertifikasi</a>
                    </li>
                    <li>
                        <a href="">Non Sertifikasi</a>
                    </li>
                </ul>
              </div>
              <div className="services">
                <ul>
                    <li>
                        <a href="">Divisi Konsultan</a>
                    </li>
                    <li>
                        <a href="">Event Organizer</a>
                    </li>
                    <li>
                        <a href="">Training SDM</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row-footer">
            <p>&copy;2025 PT. GEO MANDIRI KREASI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
