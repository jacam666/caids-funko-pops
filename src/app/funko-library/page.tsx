"use client";

// import React from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Link from "next/link";

// export default function Library() {
//     return (
//         // <div className="min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
//         <div className="min-h-screen bg-black">
//             <Navbar />

//             <div className="flex flex-col text-center items-center py-4">
//                 <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
//                     Funko library.!
//                 </h1>
//                 {/* <p className="font-sans text-3xl sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
//           Funko library.
//         </p> */}
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/marvel-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/image.webp"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Marvel Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/disney-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/funko-pop-disney-logo.jpg"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Disney Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/dc-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/dc-funko-logo.png"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             DC Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/potter-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/potter-funko-logo-removebg-preview.png"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Harry Potter Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/bts-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/bts-funko-logo.png"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             BTS Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/starwars-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/OIP-removebg-preview.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Star Wars Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/sonic-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/R.png"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Sonic Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/strangerthings-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/stranger-things-logo-removebg-preview.png"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Stranger Things Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/pokemon-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/pokemon-funko-logo.png"
//                             alt="Funko Library"
//                             width={150}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Pokemon Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/anime-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/anime-funko-logo.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Anime Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/startrek-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/Star-trek-pops-funko-removebg-preview.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Star Trek Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/doctorwho-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/doctor-who-funko-removebg-preview.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Doctor Who Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/wwe-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/wwe-funko-logo.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             WWE Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/football-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/football-funko-logo-removebg-preview.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Football Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/xmen-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/xmen-funko-logo-removebg-preview.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             X-MEN Collection
//                         </h3>
//                     </Link>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
//                     <Link href="/fivenights-pops" className="flex flex-col flex-grow items-center justify-center">
//                         <Image
//                             src="/images/fivenights-funko-logo-removebg-preview.png"
//                             alt="Funko Library"
//                             width={250}
//                             height={300}
//                             className="mx-auto mt-4 mb-8"
//                         />
//                         <div className="flex-grow" />
//                         <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
//                             Five Nights At Freddie's Collection
//                         </h3>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const collections = [
  {
    title: "Marvel Collection",
    href: "/marvel-pops",
    image: "/images/image.webp",
  },
  {
    title: "Disney Collection",
    href: "/disney-pops",
    image: "/images/funko-pop-disney-logo.jpg",
  },
  {
    title: "DC Collection",
    href: "/dc-pops",
    image: "/images/dc-funko-logo.png",
  },
  {
    title: "Harry Potter Collection",
    href: "/potter-pops",
    image: "/images/potter-funko-logo-removebg-preview.png",
  },
  {
    title: "BTS Collection",
    href: "/bts-pops",
    image: "/images/bts-funko-logo.png",
  },
  {
    title: "Star Wars Collection",
    href: "/starwars-pops",
    image: "/images/OIP-removebg-preview.png",
  },
  {
    title: "Sonic Collection",
    href: "/sonic-pops",
    image: "/images/R.png",
  },
  {
    title: "Stranger Things Collection",
    href: "/strangerthings-pops",
    image: "/images/stranger-things-logo-removebg-preview.png",
  },
  {
    title: "Pokemon Collection",
    href: "/pokemon-pops",
    image: "/images/pokemon-funko-logo.png",
  },
  {
    title: "Anime Collection",
    href: "/anime-pops",
    image: "/images/anime-funko-logo.png",
  },
  {
    title: "Star Trek Collection",
    href: "/startrek-pops",
    image: "/images/Star-trek-pops-funko-removebg-preview.png",
  },
  {
    title: "Doctor Who Collection",
    href: "/doctorwho-pops",
    image: "/images/doctor-who-funko-removebg-preview.png",
  },
  {
    title: "WWE Collection",
    href: "/wwe-pops",
    image: "/images/wwe-funko-logo.png",
  },
  {
    title: "Football Collection",
    href: "/football-pops",
    image: "/images/football-funko-logo-removebg-preview.png",
  },
  {
    title: "X-MEN Collection",
    href: "/xmen-pops",
    image: "/images/xmen-funko-logo-removebg-preview.png",
  },
  {
    title: "Five Nights At Freddie's Collection",
    href: "/fivenights-pops",
    image: "/images/fivenights-funko-logo-removebg-preview.png",
  },
  {
    title: "Game Of Throne's Collection",
    href: "/gothrones-pops",
    image: "/images/GOT-funko-logo-1.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Library() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex flex-col text-center items-center py-4">
        <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
          Funko library.!
        </h1>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {collections.map((col, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <Link href={col.href} className="flex flex-col flex-grow items-center justify-center">
              <Image
                src={col.image}
                alt={col.title}
                width={150}
                height={300}
                className="mx-auto mt-4 mb-8"
              />
              <div className="flex-grow" />
              <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">
                {col.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
