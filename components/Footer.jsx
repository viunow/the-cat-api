import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-neutral-800 flex flex-col items-center justify-center gap-1 py-2 px-4">
      <h2 className="text-white">
        Developed by{" "}
        <a
          href="https://github.com/viunow"
          target="_blank"
          className="text-violet-400 hover:text-violet-300 transition duration-500 font-bold"
        >
          viunow
        </a>
      </h2>
      <h2 className="text-white text-sm text-center">
        Created with{" "}
        <a
          href="https://www.thecatapi.com/"
          target="_blank"
          className="text-violet-400 hover:text-violet-300 transition duration-500"
        >
          The Cat API - Cat as a Service
        </a>
      </h2>
    </div>
  );
}
