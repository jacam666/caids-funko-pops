import React from "react";
import Navbar from "@/components/Navbar";
import funkos from "@/app/data/funkos.json";
import Image from "next/image";
import Link from "next/link";

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
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Link href="/marvel-pops" className="flex flex-shrink-0 items-center justify-center">
                        <div className="flex flex-col shrink-0 items-center justify-center">
                            <Image
                                src="/images/marvel-funko-logo.png"
                                alt="Funko Library"
                                width={300}
                                height={300}
                                className="mx-auto mt-4 mb-8"
                            />
                            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                Marvel Collection
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Link href="/disney-pops" className="flex flex-shrink-0 items-center justify-center">
                        <div className="flex flex-col shrink-0 items-center justify-center">
                            <Image
                                src="/images/funko-pop-disney-logo.jpg"
                                alt="Funko Library"
                                width={300}
                                height={300}
                                className="mx-auto mt-4 mb-8"
                            />
                            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                Disney Collection
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Link href="/dc-pops" className="flex flex-shrink-0 items-center justify-center">
                        <div className="flex flex-col shrink-0 items-center justify-center">
                            <Image
                                src="/images/dc-funko-logo.png"
                                alt="Funko Library"
                                width={300}
                                height={300}
                                className="mx-auto mt-4 mb-8"
                            />
                            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                DC Collection
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Link href="/potter-pops" className="flex flex-shrink-0 items-center justify-center">
                        <div className="flex flex-col shrink-0 items-center justify-center">
                            <Image
                                src="/images/potter-funko-logo-removebg-preview.png"
                                alt="Funko Library"
                                width={300}
                                height={300}
                                className="mx-auto mt-4 mb-8"
                            />
                            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                Disney Collection
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Link href="/disney-pops" className="flex flex-shrink-0 items-center justify-center">
                        <div className="flex flex-col shrink-0 items-center justify-center">
                            <Image
                                src="/images/funko-pop-disney-logo.jpg"
                                alt="Funko Library"
                                width={300}
                                height={300}
                                className="mx-auto mt-4 mb-8"
                            />
                            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                Disney Collection
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Link href="/disney-pops" className="flex flex-shrink-0 items-center justify-center">
                        <div className="flex flex-col shrink-0 items-center justify-center">
                            <Image
                                src="/images/funko-pop-disney-logo.jpg"
                                alt="Funko Library"
                                width={300}
                                height={300}
                                className="mx-auto mt-4 mb-8"
                            />
                            <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                                Disney Collection
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
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
            </div> */}
        </div>
    );
}
