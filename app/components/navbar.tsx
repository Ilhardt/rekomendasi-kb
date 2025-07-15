'use client'
import React, { useState } from "react";
import Logo from "@/public/file.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#030325]  sticky top-0 border-b-3 border-[#1e2032] z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 dark:text-teal-300" href="/">
          <div className="flex flex-row items-center">
            <Image src={Logo} alt={"Logo"} width={150} />
          </div>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-[#2747c2] dark:text-white dark:hover:text-white"
                  href="/search"
                >
                  Search
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-[#2747c2] dark:text-white dark:hover:text-white"
                  href="/rekomendasi"
                >
                  Rekomendasi
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-[#2747c2] dark:text-white dark:hover:text-white"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-2">
                <span
                  className={`block h-0.5 w-8 bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-8 bg-white transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-8 bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-[#030325] dark:bg-gray-800 p-4 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a
              className="text-white dark:text-white hover:text-[#2747c2] transition"
              href="/search"
              onClick={toggleMenu}
            >
              Search
            </a>
          </li>
          <li>
            <a
              className="text-white dark:text-white hover:text-[#2747c2] transition"
              href="/rekomendasi"
              onClick={toggleMenu}
            >
              Rekomendasi
            </a>
          </li>
          <li>
            <a
              className="text-white dark:text-white hover:text-[#2747c2] transition"
              href="/faq"
              onClick={toggleMenu}
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}