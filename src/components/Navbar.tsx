"use client"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import SearchModal from "@/components/SearchModal";


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'My Collection', href: '/collection', current: false },
  { name: 'WishList', href: '/wishlist', current: false },
  { name: 'Funko Library', href: '/funko-library', current: false },
]



function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear the search input after submission
    }
    console.log("Searching for:", searchQuery);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    // <Disclosure as="nav" className="bg-gradient-to-br from-[#0f0e0e] to-[#474646]">
    <Disclosure as="nav" className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <Link href="/" className="flex items-center justify-center">
                <Image
                  alt="Your Company"
                  src="/images/funko-logo (2).png"
                  priority
                  width={200}
                  height={100}
                  className="h-12 w-auto"
                />
              </Link>
            </div> */}
            <div className="flex justify-center w-full sm:hidden absolute left-0 right-0">
              <Link href="/" className="flex items-center justify-center ">
                <Image
                  alt="Funko Logo"
                  src="/images/funko-logo (2).png"
                  priority
                  width={140}
                  height={70}
                  className="h-18 w-auto"
                />
              </Link>
            </div>

            {/* Logo - left on medium+ screens */}
            <div className="hidden sm:flex flex-shrink-0 items-center">
              <Link href="/" className="flex items-center">
                <Image
                  alt="Funko Logo"
                  src="/images/funko-logo (2).png"
                  priority
                  width={200}
                  height={100}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=' flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <form onSubmit={handleSearchSubmit} className="hidden md:block">
                <input
                  type="text"
                  placeholder="Search Funkos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-3 py-2 rounded-md text-sm bg-gray-800 md:text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                />
              </form>
              {/* Visible below md screens */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="md:hidden text-white hover:text-gray-300"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
              <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="/images/Caids-profile-pic.jpg"
                    className="size-10 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
