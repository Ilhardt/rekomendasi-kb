import React from "react";

type ReferenceFoundProps = {
  is_found: boolean;
};

export default function ReferenceFound({ is_found }: ReferenceFoundProps) {
  return (
    <div className="flex w-full font-semibold flex-row items-center gap-2 mt-6 text-white text-2xl justify-center">
      {is_found ? (
        ""
      ) : (
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-220, -6359)" fill="currentColor">
              <g transform="translate(56, 160)">
                <path d="M176,6207 L180,6207 L180,6205 L176,6205 L176,6207 Z M168,6207 L172,6207 L172,6205 L168,6205 L168,6207 Z M179,6215 L169,6215 C169,6208 179,6208 179,6215 Z M166,6217 L182,6217 L182,6201 L166,6201 L166,6217 Z M164,6219 L184,6219 L184,6199 L164,6199 L164,6219 Z" />
              </g>
            </g>
          </g>
        </svg>
      )}

      {is_found ? (
        <span className="text-3xl">Hasil Rekomendasi</span>
      ) : (
        <span>Rekomendasi Keyboard tidak ditemukan</span>
      )}
    </div>
  );
}
