import React from 'react';


const KolomPanduan = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5 p-4 bg-gray-800 rounded-lg shadow-xl mb-4 md:mb-0">
      <h2 className="text-xl font-bold text-white mb-4 text-center md:text-left">
        Panduan Rekomendasi
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/nBo4nNR.png"
            alt="Panduan Layout Keyboard"
            width={500}
            height={500}
            className="rounded-lg mb-2"
          />
          <p className="text-sm text-gray-400 text-center">
            Pilih layout keyboard yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/jgU6EzP.jpeg"
            alt="Panduan Profil Keycaps"
            width={500}
            height={500}
            className="rounded-lg mb-2"
          />
          <p className="text-sm text-gray-400 text-center">
            Kenali berbagai profil keycaps untuk kenyamanan mengetik.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/dSbEo1s.png"
            alt="Panduan Profil Switch"
            width={500}
            height={500}
            className="rounded-lg mb-2"
          />
          <p className="text-sm text-gray-400 text-center">
            Temukan karakteristik switch yang sesuai dengan gaya mengetik Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KolomPanduan; 