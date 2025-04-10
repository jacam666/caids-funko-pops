//import Link from "next/link";
import Navbar from "@/components/Navbar";
import React from "react";
// import funkos from "@/app/data/caidees-collection.json";
import funkos from "@/app/data/marvelpop.json";

export default function Collection() {
    return (
        // <div className="min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
        <div className="min-h-screen bg-black">
            <Navbar />
            <div className="flex flex-col text-center items-center py-4">
                <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
                    MARVEL Funko Pops!
                </h1>
                
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {funkos.map((funko, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={funko.image}
                            alt={funko.title}
                            className="w-full h-auto rounded-md"
                        />
                        <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                            {funko.title}
                        </h3>
                        {/* <div className="flex-grow"/>
                        <h2 className="flex justify-end items-end text-md font-semibold mt-4 text-gray-800">
                            {funko.category}
                        </h2> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
