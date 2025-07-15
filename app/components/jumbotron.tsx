import React from "react";

type JumbotronProps = {
    title: string;
    desc: string;
    url: string;
    picture: string;
}

export default function Jumbotron({title, desc, url, picture}: JumbotronProps) {
  return (
    <section
      id="product"
      className="overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {title}
          </h2>
          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-justify">
            {desc}
          </p>
          <div className="mt-4 sm:mt-8">
            <a
              href={`/${url}`}
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              Rekomendasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
