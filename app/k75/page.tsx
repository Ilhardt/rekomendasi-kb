import React from "react";

import KeyboardCard from "../components/keyboardCard";
import Navbar from "../components/navbar";

import { Keyboard } from "../types/keyboard";
import { getKeyboardSize } from "../api/keyboard";

export default async function page() {
  const response = await getKeyboardSize(75);

  const data: Keyboard[] = response;
  return (
    <div className="bg-[#030325]">
      <div className="flex w-full flex-wrap pb-5">
        {data.map((e, i) => (
          <KeyboardCard key={i} data={e} />
        ))}
      </div>
    </div>
  );
}
