import Navbar from "@/components/Navbar";

export default function Wishlist() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-[#0f0e0e] to-[#454645]">
    <div className="min-h-screen bg-black">
        <Navbar />
      <div className="flex flex-col text-center items-center py-4">
        <h1 className="font-serif animated-gradient text-5xl sm:text-8xl filter drop-shadow-lg">
          Wishlist
        </h1>
        <p className="font-sans text-3xl sm:text-4l mx-4 text-white pt-4 filter drop-shadow-lg">
          These Are The Funko's I Want To Add To My Collection
        </p>
      </div>
    </div>
  );
}