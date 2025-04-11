"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery("");
      onClose(); // Close modal
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-semibold text-gray-900 mb-4">Search Funkos</Dialog.Title>
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Start typing..."
              className="w-full px-4 py-2 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
            />
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
