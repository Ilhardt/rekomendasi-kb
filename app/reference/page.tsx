"use client";
import React, { useEffect, useState } from "react";

import { Keyboard } from "../types/keyboard";
import Navbar from "../components/navbar";
import KeyboardCard from "../components/keyboardCard";
import { getKeyboardReference } from "../api/keyboard";
import KeyboardCardLoading from "../components/keyboardCardLoading";
import ReferenceFound from "../components/referenceNotFound";
import Expandable from "../components/expandable";

export default function page() {
  const [data, setData] = useState<Keyboard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReference, setIsReference] = useState<boolean>(false);
  const [isExpand, setIsExpand] = useState<boolean>(false);

  function liftingUpExpand(value: boolean) {
    setIsExpand(value);
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const url = window.location.pathname + window.location.search;
      const response = await getKeyboardReference(url);

      setIsLoading(false);
      setIsReference(response.is_reference);
      setData(response.result);
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#030325]">
      <div className="flex w-full gap-4 justify-center items-center flex-grow">
        {isLoading ? (
          <div className="flex flex-col gap-2 w-full px-4">
            <KeyboardCardLoading />
            <KeyboardCardLoading />
            <KeyboardCardLoading />
          </div>
        ) : isReference ? (
          <div className="flex w-full flex-col gap-1 overflow-x-hidden overflow-y-auto items-start">
            <ReferenceFound is_found={true} />
            <div className="flex w-full flex-wrap pb-10">
              {data.map((e, i) => (
                <KeyboardCard key={i} data={e} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col flex-grow gap-4 w-full">
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
                isExpand
                  ? "translate-y-[-40px] opacity-0 max-h-0"
                  : "translate-y-0 opacity-100 max-h-40"
              }`}
            >
              <ReferenceFound is_found={false} />
            </div>
            <Expandable data={data} liftingUpExpand={liftingUpExpand} />
          </div>
        )}
      </div>
    </div>
  );
}
