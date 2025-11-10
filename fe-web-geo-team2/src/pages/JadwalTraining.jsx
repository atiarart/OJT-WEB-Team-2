import Table from "../components/Table";

function JadwalTraining() {
  const dataElevator = [
    {
      no: 1,
      nama: "Ahli K3 Elevator Eskalator",
      harga: "18.500.000",
      jmlHari: "12",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Teknisi Elevator & Eskalator",
      harga: "8.000.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Operator Elevator & Eskalator",
      harga: "8.000.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
  ];

  const penanggulanganKebakaran = [
    {
      no: 1,
      nama: "Ahli K3 Spesialis Kebakaran Tingkat A",
      harga: "9.000.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Petugas (Koordinator) Kebakaran Tingkat B",
      harga: "9.000.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Petugas (Regu) Kebakaran Tingkat C",
      harga: "8.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 4,
      nama: "Petugas (Peran) Kebakaran Tingkat D",
      harga: "5.500.000",
      jmlHari: "3",
      bulan: "",
      tanggal: "",
    },
  ];

  const konstruksi = [
    {
      no: 1,
      nama: "Ahli K3 Madya Konstruksi",
      harga: "11.000.000",
      jmlHari: "9",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Ahli k3 Muda Konstruksi",
      harga: "8.500.000",
      jmlHari: "7",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Supervisi Perancah",
      harga: "8.000.000",
      jmlHari: "5",
      bulan: "",
      tanggal: "",
    },
    {
      no: 4,
      nama: "Teknisi Perancah",
      harga: "7.000.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
  ];

  const pesawatAngkat = [
    {
      no: 1,
      nama: "Ahli K3 Pesawat Angkat dan Pesawat Angkut",
      harga: "33.000.000",
      jmlHari: "25",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Teknisi Pesawat Angkat dan Pesawat Angkut",
      harga: "11.500.000",
      jmlHari: "9",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Operator Overhead Crane Kelas 1",
      harga: "7.000.000",
      jmlHari: "5",
      bulan: "",
      tanggal: "",
    },
    {
      no: 4,
      nama: "Operator Overhead Crane Kelas 2",
      harga: "6.000.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
    {
      no: 5,
      nama: "Operator Overhead Crane Kelas 3",
      harga: "5.000.000",
      jmlHari: "3",
      bulan: "",
      tanggal: "",
    },
    {
      no: 6,
      nama: "Operator forklift Kelas 1",
      harga: "6.000.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
    {
      no: 7,
      nama: "Operator forklift Kelas 2",
      harga: "5.000.000",
      jmlHari: "3",
      bulan: "",
      tanggal: "",
    },
    {
      no: 8,
      nama: "Operator Alat Berat",
      harga: "6.500.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
    {
      no: 9,
      nama: "Juru Ikat (Rigger), Pita Transport (Conveyor)",
      harga: "5.000.000",
      jmlHari: "3",
      bulan: "",
      tanggal: "",
    },
    {
      no: 10,
      nama: "Operator Gondola",
      harga: "6.000.000",
      jmlHari: "3",
      bulan: "",
      tanggal: "",
    },
  ];

  const pesawatProduksi = [
    {
      no: 1,
      nama: "Ahli K3 Pesawat Tenaga dan Produksi",
      harga: "33.000.000",
      jmlHari: "25",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Teknisi Pesawat Tenaga dan Produksi",
      harga: "11.500.000",
      jmlHari: "9",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Operator Penggerak Mula (Motor Diesel, Turbin)",
      harga: "6.500.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
    {
      no: 4,
      nama: "Operator Mesin Produksi dan Perkakas Kelas 1",
      harga: "7.500.000",
      jmlHari: "5",
      bulan: "",
      tanggal: "",
    },
    {
      no: 5,
      nama: "Operator Mesin Produksi dan Perkakas Kelas 2",
      harga: "6.500.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
    {
      no: 6,
      nama: "Operator Tanur Kelas 1",
      harga: "7.500.000",
      jmlHari: "5",
      bulan: "",
      tanggal: "",
    },
    {
      no: 7,
      nama: "Operator Tanur Kelas 2",
      harga: "6.500.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
  ];

  const pesawatUap = [
    {
      no: 1,
      nama: "Ahli K3 Pesawat Uap Bejana dan Tekan",
      harga: "33.000.000",
      jmlHari: "25",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Teknisi Tangki Timbun dan Bejana Tekan",
      harga: "11.500.000",
      jmlHari: "9",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Operator Boiler Kelas 1",
      harga: "8.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 4,
      nama: "Operator Boiler Kelas 2",
      harga: "6.500.000",
      jmlHari: "4",
      bulan: "",
      tanggal: "",
    },
  ];

  const pengelasan = [
    {
      no: 1,
      nama: "Juru Las GTAW/GMAW Kelas 1",
      harga: "25.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 2,
      nama: "Juru Las GTAW/GMAW Kelas 2",
      harga: "24.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 3,
      nama: "Juru Las GTAW/GMAW Kelas 3",
      harga: "23.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 4,
      nama: "Juru las Listrik/SMAW Kelas 1",
      harga: "24.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 5,
      nama: "Juru las Listrik/SMAW Kelas 2",
      harga: "23.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 6,
      nama: "Juru las Listrik/SMAW Kelas 3",
      harga: "22.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 7,
      nama: "Juru Las Kombinasi SMAW/GWTAW Kelas 1",
      harga: "26.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 8,
      nama: "Juru Las Kombinasi SMAW/GWTAW Kelas 2",
      harga: "25.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
    {
      no: 9,
      nama: "Juru Las Kombinasi SMAW/GWTAW Kelas 3",
      harga: "24.500.000",
      jmlHari: "6",
      bulan: "",
      tanggal: "",
    },
  ];

  return (
    <div className="data-training">
      <h1>Jadwal Training PT. Geo Mandiri Kreasi</h1>

      <a className="download-jadwal" href="./dokumen/jadwal_training.pdf" download>
      Download Jadwal Training 2025
      </a>

      <div className="container">
        <h3>Bidang Elevator dan Eskalator</h3>
        <Table className="table" data={dataElevator} />
      </div>

      <div className="container">
        <h3>Bidang Penanggulangan Kebakaran</h3>
        <Table className="table" data={penanggulanganKebakaran} />
      </div>

      <div className="container">
        <h3>Bidang Konstruksi dan Bangunan</h3>
        <Table className="table" data={konstruksi} />
      </div>

      <div className="container">
        <h3>Bidang Pesawat Angkat dan Pesawat Angkut</h3>
        <Table className="table" data={pesawatAngkat} />
      </div>

      <div className="container">
        <h3>Bidang Pesawat Tenaga dan Produksi</h3>
        <Table className="table" data={pesawatProduksi} />
      </div>

      <div className="container">
        <h3>Bidang Pesawat Uap, bejana Tekanan & Tangki Timbun</h3>
        <Table className="table" data={pesawatUap} />
      </div>

      <div className="container">
        <h3>Bidang Pengelasan</h3>
        <Table className="table" data={pengelasan} />
      </div>
    </div>
  );
}

export default JadwalTraining;
