'use client'
import React from "react";
import Navbar from "../components/navbar";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#030325]">
      <div className="flex flex-col w-full justify-center items-center gap-4 text-white pt-10 pb-10">
        <span className="flex justify-start items-start text-3xl font-semibold mb-10">
          Frequently Asked Questions
        </span>
        <div className="grid w-[90%] gap-4 text-sm grid-cols-1 md:grid-cols-2">
          {/* 1 */}
          <details className="group bg-[#030325] rounded-md [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between gap-1.5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <h2 className="text-lg font-medium">
                Apa itu keyboard mechanical dan apa bedanya dengan keyboard biasa?
              </h2>
              <Icons />
            </summary>
            <p className="px-4 pt-4 text-white pb-3">
              Keyboard mechanical menggunakan sakelar fisik (switch) di bawah tiap tombol yang memberikan respon lebih taktis, presisi, dan daya tahan yang lebih tinggi dibanding keyboard membran yang menggunakan lapisan karet.
            </p>
          </details>

          {/* 2 */}
          <details className="group bg-[#030325] rounded-md [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <h2 className="text-lg font-medium">
                Apa perbedaan antara switch Linear dan Tactile?
              </h2>
              <Icons />
            </summary>
            <div className="flex flex-col px-4 pt-4 text-white pb-3">
              <span>- Linear: Tekanannya halus tanpa tonjolan dan tanpa suara klik.</span>
              <span>- Tactile: Ada tonjolan ringan sebagai umpan balik saat tombol ditekan.</span>
            </div>
          </details>

          {/* 3 */}
          <details className="group bg-[#030325] rounded-md [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <h2 className="text-lg font-medium">
                Apa itu fitur hot-swappable pada keyboard?
              </h2>
              <Icons />
            </summary>
            <p className="px-4 pt-4 text-white pb-3">
              Hot-swappable berarti switch dapat diganti tanpa perlu menyolder, sehingga pengguna bisa menyesuaikan atau bereksperimen dengan berbagai jenis switch secara fleksibel.
            </p>
          </details>

          {/* 4 */}
          <details className="group bg-[#030325] rounded-md [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <h2 className="text-lg font-medium">
                Apa fungsi dari knob atau rotary encoder pada keyboard?
              </h2>
              <Icons />
            </summary>
            <p className="px-4 pt-4 text-white pb-3">
              Knob adalah dial yang bisa diputar untuk mengatur volume, kecerahan, atau fungsi custom lainnya. Fitur ini makin populer di keyboard custom dan kreator konten.
            </p>
          </details>

          {/* 5 */}
          <details className="group bg-[#030325] rounded-md [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <h2 className="text-lg font-medium">
                Apa itu layout keyboard 60%, 65%, 75%, TKL, dan Full-Size?
              </h2>
              <Icons />
            </summary>
            <div className="flex flex-col px-4 pt-4 text-white pb-3 space-y-1">
              <span>• 60%: Layout paling kecil, hanya berisi tombol alfanumerik dasar tanpa tombol panah, navigasi, atau fungsi (F1–F12).</span>
              <span>• 65%: Tambahan tombol panah dan navigasi seperti Delete dan Home, tetap kompak namun lebih fungsional dibanding 60%.</span>
              <span>• 75%: Menyediakan baris fungsi (F1–F12), tombol panah, dan navigasi lengkap dengan posisi yang dirapatkan agar hemat ruang.</span>
              <span>• TKL (Tenkeyless): Layout hampir full tanpa numpad. Cocok untuk gaming.</span>
              <span>• Full-Size: Layout penuh dengan semua tombol termasuk numpad. Ideal untuk input angka intensif.</span>
            </div>
          </details>

          {/* 6 */}
          <details className="group bg-[#030325] rounded-md [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <h2 className="text-lg font-medium">
                Apakah keyboard mekanik cocok untuk penggunaan jangka panjang?
              </h2>
              <Icons />
            </summary>
            <p className="px-4 pt-4 text-white pb-3">
              Ya. Berkat struktur switch yang tahan lama dan opsi modifikasi, keyboard mekanik sangat cocok untuk penggunaan intensif seperti mengetik, gaming, atau editing, dengan umur pakai bisa mencapai puluhan juta kali tekan.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block size-5 shrink-0 group-open:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden size-5 shrink-0 group-open:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
}
