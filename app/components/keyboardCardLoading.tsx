import React from "react";

export default function KeyboardCardLoading() {
  return (
    <div className="flex w-full h-72 gap-6 mx-4 mt-8 shadow-md">
      <div className="flex w-full items-center bg-gray-900 border transition hover:shadow-xl  dark:shadow-gray-800/25 mt-8 mx-4 outline-2 outline-gray-900 filter drop-shadow-[0_0_5px_#4f46e5]">
        <div className="flex h-full items-end rotate-180 p-2 [writing-mode:_vertical-lr]">
          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-2.5 mb-4"></div>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-60 bg-gray-300 rounded-sm sm:w-56 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between mt-2">
          <div className="flex flex-col gap-3 border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
            <div className="flex flex-col">
              <div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4"></div>
              </div>

              <div className="flex flex-col mt-2 line-clamp-3 text-sm/relaxed">
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-200 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-200 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-200 mb-2"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              <div className="flex w-200 gap-2 flex-wrap">
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 w-30 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
