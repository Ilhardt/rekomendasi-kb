import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen">
      <section className="bg-[#030325] lg:grid lg:place-content-center ">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl dark:text-white">
              mσσn
              <strong className="text-[#2747c2]"> вluє </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed dark:text-gray-200">
              Selamat datang di Moonblue — website rekomendasi keyboard mekanik
              berbasis preferensi pengguna!
            </p>
            <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed dark:text-gray-200">
              Di sini, kamu nggak perlu bingung memilih keyboard yang paling
              cocok. Moonblue hadir untuk membantumu menemukan keyboard ideal
              berdasarkan gaya mengetik, kebutuhan fitur, dan selera desain. Mau
              yang linear untuk gaming cepat, tactile untuk produktivitas, atau
              full-size dengan RGB yang menyala—kami punya rekomendasinya!
            </p>

            <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed dark:text-gray-200">
              Dengan sistem pencocokan pintar, setiap rekomendasi di Moonblue
              dibuat khusus untukmu. Cukup isi preferensimu, dan biarkan
              Moonblue menghadirkan keyboard impianmu secara praktis, cepat, dan
              penuh gaya.
            </p>
            <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed dark:text-gray-200">
              Moonblue – Ketik dengan hati, tekan dengan gaya! 🩵
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="/search"
              >
                Cari Rekomendasi
              </a>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 768"
            className="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white"
          >
            <image
              href="https://i.imgur.com/BcQXgM1.png"
              width="1024"
              height="768"
              className="filter drop-shadow-[0_0_30px_#4f46e5] transition"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
