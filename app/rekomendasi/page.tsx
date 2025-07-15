import React from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";

const data = [
  {
    title: "Keyboard 60%",
    picture: "https://i.imgur.com/U7k3SDz.jpeg",
    url: "k60",
    desc: "Keyboard 60% adalah solusi sempurna bagi mereka yang menginginkan kesederhanaan dan efisiensi di meja kerja atau gaming setup mereka. Dengan ukurannya yang kompak, keyboard ini hanya mempertahankan tombol-tombol inti seperti alphanumeric keys dan beberapa tombol fungsi, tanpa kehilangan esensi performa. Selain hemat ruang, keyboard 60% memancarkan estetika minimalis yang memikat, sering kali hadir dengan desain customizable seperti keycaps berwarna-warni atau switch yang dapat diganti sesuai preferensi. Desain ergonomisnya memungkinkan pengguna untuk menikmati pengalaman mengetik yang lebih nyaman dan bebas dari gangguan tombol-tombol yang jarang digunakan. Keyboard ini juga menjadi favorit para gamer dan programmer berkat portabilitasnya, menjadikannya pilihan cerdas untuk gaya hidup modern.",
  },
  {
    title: "Keyboard 65%",
    picture: "https://i.imgur.com/y7lYitT.jpeg",
    url: "k65",
    desc: "Keyboard 65% adalah pilihan ideal bagi pengguna yang menginginkan keseimbangan antara desain compact dan fungsionalitas. Dengan mempertahankan tombol panah, tombol navigasi dasar, dan beberapa tombol fungsi tambahan, keyboard ini menawarkan kemudahan akses tanpa memakan terlalu banyak ruang. Desainnya yang ramping dan ergonomis membuatnya nyaman digunakan baik untuk mengetik maupun bermain game dalam waktu lama. Selain itu, keyboard 65% sering hadir dengan fitur kustomisasi seperti keycaps berkualitas tinggi, switch yang dapat disesuaikan, serta pencahayaan RGB yang menambah estetika visual. Cocok untuk mereka yang menginginkan portabilitas tanpa mengorbankan fungsi, keyboard ini menjadi salah satu pilihan favorit bagi kreator, gamer, dan profesional modern.",
  },
  {
    title: "Keyboard 75%",
    picture: "https://i.imgur.com/Vu2ro8D.jpeg",
    url: "k75",
    desc: "Keyboard 75% adalah perpaduan sempurna antara compactness dan fungsionalitas penuh, menjadikannya favorit bagi pengguna yang menginginkan efisiensi tanpa mengorbankan aksesibilitas. Dengan mempertahankan semua tombol utama, termasuk tombol panah, navigasi, dan beberapa tombol fungsi, keyboard ini menghadirkan pengalaman mengetik yang lebih intuitif dibandingkan layout yang lebih kecil. Desainnya yang space-saving memberikan lebih banyak ruang di meja kerja, sementara fitur tambahan seperti RGB lighting dan keycaps berkualitas tinggi menambah estetika modern. Keyboard 75% sangat cocok untuk pekerja kreatif, programmer, dan gamer yang mengutamakan kenyamanan, fungsi, dan gaya dalam satu perangkat yang portabel. 😊",
  },
  {
    title: "Keyboard TKL",
    picture: "https://i.imgur.com/5Olkx6a.jpeg",
    url: "tkl",
    desc: "Keyboard TKL (Tenkeyless) adalah salah satu layout paling populer di kalangan pengguna yang menginginkan keseimbangan antara fungsionalitas lengkap dan desain yang lebih ringkas. Dengan menghilangkan bagian numpad di sisi kanan, keyboard ini tetap mempertahankan semua tombol penting seperti huruf, panah, navigasi (Insert, Delete, Home, End, Page Up/Down), serta baris fungsi (F1–F12), sehingga tetap nyaman digunakan untuk berbagai kebutuhan—mulai dari mengetik dokumen, coding, hingga bermain game. Desain tanpa numpad memberikan lebih banyak ruang untuk pergerakan mouse, yang sangat dihargai oleh gamer dan pengguna dengan setup minimalis. Selain itu, ukuran yang lebih kecil membuat keyboard TKL lebih mudah dibawa dan lebih fleksibel ditempatkan di meja kerja yang sempit.",
  },
  {
    title: "Keyboard Full Size",
    picture: "https://i.imgur.com/53lrRU7.jpeg",
    url: "fullsize",
    desc: "Keyboard Full-Size adalah layout paling lengkap yang mencakup seluruh tombol standar, termasuk alfanumerik, baris fungsi (F1–F12), tombol navigasi (Insert, Delete, Home, End, Page Up/Down), panah arah, serta numpad di sisi kanan. Layout ini sangat ideal bagi pengguna yang membutuhkan akses penuh ke semua fungsi tanpa kompromi, seperti akuntan, programmer, atau pekerja kantoran yang sering menggunakan input angka. Dengan jumlah tombol yang lengkap, keyboard ini memberikan kenyamanan maksimal untuk mengetik, navigasi, dan produktivitas tinggi. Namun, ukurannya yang besar membuatnya kurang cocok untuk meja kerja sempit atau setup portabel.",
  },
];

const rekomendasi = () => {
  return (
    <div>
      {data.map((e, i) => (
        <Jumbotron
          key={i}
          title={e.title}
          desc={e.desc}
          url={e.url}
          picture={e.picture}
        />
      ))}
    </div>
  );
};

export default rekomendasi;
