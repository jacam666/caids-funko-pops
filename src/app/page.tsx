import { Oi } from "next/font/google";
import Image from "next/image";

const oi = Oi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oi',
})

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-[#f7cc40] to-[#90ee6b]">
      <div className="">
        <div className="  flex flex-col text-center items-center py-4 ">
          <h1 className="font-serif text-5xl sm:text-8xl  text-gray-700 filter drop-shadow-lg">
            Caidees Funko Pops!
          </h1>
          <p className="font-mono text-3xl sm:text-4l mx-4 text-gray-900 pt-4 filter drop-shadow-lg">
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
          <p className="font-serif text-3xl text-center sm:mx-auto px-4  text-gray-700 mt-4">
            Explore the collection and find your favorite Funko Pops!
          </p>
        </div>
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
