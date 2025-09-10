"use client";
import { Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { DataReference } from "../types/keyboard";
import { useRouter } from "next/navigation";

export default function searchForm() {
  const router = useRouter();

  const [layout, setLayout] = useState<number>(60);
  const [keycaps, setKeycaps] = useState<string>("CHERRY");
  const [switchType, setSwitchType] = useState<string>("LINEAR");
  const [connectivity, setConnectivity] = useState<string>("WIRED");
  const [knob, setKnob] = useState<boolean>(true);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  function handleOption<T>(
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<T>>
  ) {
    const value = e.target.value as unknown as T;
    set(value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const dataReference: DataReference = {
      layout,
      keycaps,
      switchType,
      connectivity,
      knob,
      minPrice,
      maxPrice,
    };

    const jsonString = JSON.stringify(dataReference);
    const encoded = encodeURIComponent(jsonString)
    const url = `/reference?data=${encoded}`

    window.location.href = url;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-4 gap-y-2">
      <div className="flex w-full flex-col max-w-sm p-2 gap-2">
        <Label className="text-white">Ukuran/Layout</Label>
        <Select
          required
          onChange={(e) => {
            setLayout(Number(e.target.value));
          }}
        >
          <option value="60">60% (60 Persen) Layout</option>
          <option value="65">65% (65 Persen) Layout</option>
          <option value="75">75% (75 Persen) Layout</option>
          <option value="80">TKL (Tenkeyless) Layout</option>
          <option value="100">Full-Size Layout</option>
        </Select>
      </div>
      <div className="flex w-full flex-col max-w-sm p-2 gap-2">
        <Label className="text-white">Keycaps</Label>
        <Select required onChange={(e) => handleOption(e, setKeycaps)}>
          <option value="CHERRY">Cherry Profile</option>
          <option value="OEM">OEM Profile</option>
        </Select>
      </div>
      <div className="flex w-full flex-col max-w-sm p-2 gap-2">
        <Label className="text-white">Switch</Label>
        <Select required onChange={(e) => handleOption(e, setSwitchType)}>
          <option value="LINEAR">Linear Switch</option>
          <option value="TACTILE">Tactile Switch</option>
        </Select>
      </div>
      <div className="flex w-full flex-col max-w-sm p-2 gap-2">
        <Label className="text-white">Konektivitas</Label>
        <Select required onChange={(e) => handleOption(e, setConnectivity)}>
          <option value="WIRED">Wired Only</option>
          <option value="WIRELESS">Wireless</option>
        </Select>
      </div>
      <div className="flex w-full flex-col max-w-sm p-2 gap-2">
        <Label className="text-white">Knob</Label>
        <Select
          required
          onChange={(e) => {
            const value = e.target.value === "true";
            setKnob(value);
          }}
        >
          <option value="true">Ya</option>
          <option value="false">Tidak</option>
        </Select>
      </div>
      <div className="flex w-full flex-col max-w-sm p-2 gap-2">
        <Label className="text-white">Price</Label>
        <div className="flex flex-row max-w-sm justify-between gap-2 text-white">
          <TextInput
            type="number"
            addon="Min"
            onChange={(e) => {
              setMinPrice(Number(e.target.value));
            }}
          />
          <TextInput
            type="number"
            addon="Max"
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
            }}
          />
        </div>
      </div>

      {/* Left */}

      <button
        type="button"
        onClick={(e) => handleSubmit(e)}
        className="text-white bg-gray-900 hover:cursor-pointer hover:bg-[#2747c2] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Cari rekomendasi
      </button>
    </div>
  );
}
