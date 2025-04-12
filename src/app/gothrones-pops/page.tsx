import Navbar from "@/components/Navbar";
import React from "react";
import funkos from "@/app/data/gameOfThronespop.json";

export default function Collection() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <div className="flex flex-col text-center items-center py-4">
                <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
                    GAME OF THRONE'S Funko Pops!
                </h1>
                <h3 className="font-sans text-2xl font-extrabold sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
                     Caidee you're the MOTHER of Dragons!!!
                </h3>
                
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {funkos.map((funko, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-4 flex flex-col flex-grow items-center hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={funko.image}
                            alt={funko.title}
                            className="w-full h-auto rounded-md"
                        />
                        <div className="flex-grow" />
                        <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                            {funko.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
