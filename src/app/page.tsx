import { Oi } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const oi = Oi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oi',
})

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
      <div className="">
        <div className="  flex flex-col text-center items-center py-4 ">
          <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
            Caidees Funko Pops!
          </h1>
          <p className="font-sans text-3xl sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
            A collection of Funko Pops curated by Caidee.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/funko-cook-group-resell-preview-image.jpg"
            alt="Funko Pops"
            width={800}
            height={600}
            priority
            className="w-full h-auto p-4 rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="font-serif animated-gradient-alt text-3xl text-center sm:mx-auto px-4  text-white mt-4">
            Explore the collection and find your favorite Funko Pops!
          </p>
        </div>
        <Link href="/collection">
          <button className="flex mx-auto bg-gradient-to-br from-[#0f0e0e] to-[#454645] text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-gradient-to-bl transition duration-300 ease-in-out">
            View Collection
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/body-2-2.png"
            alt="Funko Pops"
            width={800}
            height={600}
            className="w-full h-auto p-4 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
