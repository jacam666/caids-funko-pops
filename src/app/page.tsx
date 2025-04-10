import { Oi } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    // <div className=" min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
    <div className=" min-h-screen bg-black">
      <Navbar />
      <div className="">
        <div className="  flex flex-col text-center items-center py-4 ">
          <h1 className="font-serif animated-gradient text-5xl sm:text-8xl ">
            Caidees Funko Pops!
          </h1>
          <p className="font-sans text-3xl sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
            A collection of Funko Pops curated by Caidee.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/funko-pop-logo-png-6.webp"
            alt="Funko Pops"
            width={800}
            height={600}
            priority
            className="w-full h-auto p-2 animate-pulse"
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="font-serif animated-gradient-alt text-3xl text-center sm:mx-auto px-4 text-white my-4">
            Explore the collection and find your favorite Funko Pops!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/body-2-2-removebg-preview.png"
            alt="Funko Pops"
            width={800}
            height={600}
            className="w-full h-auto p-2"
          />
        </div>
      </div>
    </div>
  );
}
