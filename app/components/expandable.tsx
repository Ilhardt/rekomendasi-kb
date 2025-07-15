"use client";
import React, { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Keyboard } from "../types/keyboard";
import KeyboardCard from "./keyboardCard";

type ExpandableProps = {
  data: Keyboard[];
  liftingUpExpand: (value: boolean) => void;
};

export default function Expandable({ data, liftingUpExpand }: ExpandableProps) {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [datas, _setDatas] = useState<Keyboard[]>(data);

  useEffect(() => {
    liftingUpExpand(isExpand);
  }, [isExpand]);

  return (
    <div className="flex w-[95%] flex-col overflow-x-hidden hide-scrollbar">
      <div className="flex justify-center">
        <button
          onClick={() => {
            setIsExpand(!isExpand);
          }}
          type="button"
          className="flex flex-row gap-2 items-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Alternatif Rekomendasi
          {isExpand ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>

      <div
        className={`transition-all duration-700 ease-in-out transform ${
          isExpand
            ? "opacity-100 translate-y-0 max-h-[2000px]"
            : "opacity-0 -translate-y-3 max-h-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col w-full mb-4 h-full justify-center">
          {datas.map((e, i) => (
            <KeyboardCard key={i} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
