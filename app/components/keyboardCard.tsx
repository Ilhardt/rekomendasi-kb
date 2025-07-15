'use client'
import React from "react";
import { Keyboard } from "../types/keyboard";
import { toast } from "sonner";

type KeyboardCardProps = {
  data: Keyboard;
};

export default function KeyboardCard({ data }: KeyboardCardProps) {
  return (
    <div className="flex w-full gap-6 mx-4 mt-4">
      <div className="flex bg-gray-900 transition hover:shadow-xl  dark:shadow-gray-800/25 mt-8 mx-4 outline-2 outline-gray-900 filter drop-shadow-[0_0_5px_#4f46e5]">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-white"
          >
            <span className="text-white">{data.year}</span>
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={data.picture}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-3 border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
            <div className="flex flex-col">
              <span>
                <h3 className="font-bold uppercase text-white">
                  {data.productName}
                </h3>
              </span>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white">
                {data.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold">Feature : </span>
              <div className="flex gap-2 flex-wrap">
                {data.feature.map((e, i) => (
                  <p
                    key={i}
                    className="w-fit text-xs text-white border border-white rounded-lg px-3 py-0.5"
                  >
                    {e}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            {data.reference ? (
              <a
                href={data.reference}
                className="block bg-yellow-400 px-10 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-500"
              >
                {data.price}
              </a>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toast.error("Stok keyboard kosong");
                  return;
                }}
                className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-500"
              >
                Link Marketplace
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
