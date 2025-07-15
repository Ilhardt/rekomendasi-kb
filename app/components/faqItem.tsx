"use client";

import React from "react";

type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <div className="group bg-gray-900 rounded-md border border-gray-800 [&_summary::-webkit-details-marker]:hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-1.5 rounded-xl p-4 text-left text-white"
      >
        <h2 className="text-lg font-medium">{question}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`size-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="px-4 pb-4 text-sm text-white">{answer}</div>}
    </div>
  );
}
