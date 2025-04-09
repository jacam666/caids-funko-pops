//import Link from "next/link";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Collection() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
            <Navbar />
            <div className="flex flex-col text-center items-center py-4">
                <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
                    Caidees Funko Pops!
                </h1>
                <p className="font-sans text-3xl sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
                    A collection of Funko Pops curated by Caidee.
                </p>
            </div>
        </div>
    );
}
