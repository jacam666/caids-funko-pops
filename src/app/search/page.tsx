"use client";
import { useSearchParams } from "next/navigation";
import allFunkos from "@/app/data/allfunkos.json";
import FunkoCard from "@/components/FunkoCard";
import Navbar from "@/components/Navbar";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toLowerCase() || '';
  
    const results = allFunkos.filter(funko =>
      funko.title?.toLowerCase().includes(query)
    );

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <div className="flex flex-col text-center items-center py-4">
                <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
                    Search Results for "{query}"
                </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {results.map((funko, index) => (
                    <FunkoCard key={index} funko={funko} />
                ))}
            </div>
        </div>
    );
}