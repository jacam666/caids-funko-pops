import React from "react";
import Navbar from "@/components/Navbar";
import funkos from "@/app/data/funkos.json";

export default function Collection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
      <Navbar />

      <div className="flex flex-col text-center items-center py-4">
        <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
        Funko library.!
        </h1>
        {/* <p className="font-sans text-3xl sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
          Funko library.
        </p> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {funkos.map((funko, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={funko.image}
              alt={funko.name}
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
              {funko.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
