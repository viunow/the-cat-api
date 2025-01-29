import React from "react";

export default function Navbar() {
  return (
    <div className="w-full bg-neutral-800 flex items-center justify-center py-2 px-4">
      <h2 className="text-violet-400 transition duration-500 font-bold">
        The Cat <span className="text-white">API 🐱</span>
      </h2>
    </div>
  );
}
