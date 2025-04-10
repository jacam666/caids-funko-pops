//import Link from "next/link";
import Navbar from "@/components/Navbar";
import React from "react";
import funkos from "@/app/data/btspop.json";

export default function Collection() {
    return (
        // <div className="min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
        <div className="min-h-screen bg-black">
            <Navbar />
            <div className="flex flex-col text-center items-center py-4">
                <h1 className="font-serif animated-gradient text-5xl sm:text-8xl mx-4 filter drop-shadow-lg">
                    BTS Funko Pops!
                </h1>
                <h3 className="font-sans text-lg font-extrabold sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
                    Don't you want me like I want you, baby?
                    Don't you need me like I need you now?
                    Sleep tomorrow, but tonight, go crazy
                    All you gotta do is just meet me at the.......
                </h3>

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
