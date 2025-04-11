"use client";

import { useState } from "react";

type Funko = {
  title: string;
  image: string;
  link?: string;
  price?: string;
  category?: string;
};

type Props = {
  funko: Funko;
};

export default function FunkoCard({ funko }: Props) {
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      const res = await fetch("/api/save-to-collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(funko),
      });

      if (res.ok) {
        setSaved(true);
      } else {
        console.error("Failed to save Funko");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img src={funko.image} alt={funko.title} className="w-full h-auto rounded-md" />
      <h3 className="text-lg font-semibold text-center mt-2 text-gray-800">{funko.title}</h3>
      <div className="flex flex-grow" />
      <button
        onClick={handleSave}
        disabled={saved}
        className={`mt-4 px-4 py-2 rounded text-white ${
          saved ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {saved ? "Saved" : "Save to Collection"}
      </button>
    </div>
  );
}
