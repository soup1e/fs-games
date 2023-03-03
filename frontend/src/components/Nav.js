import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-800">
      <div className="mx-auto px-7 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <Link href="/" className="text-red-500 font-bold text-lg">
              Addicting Games
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="text-white h-3 w-3 overflow-visible"
                viewBox="0 0 100 100"
              >
                <rect
                  className={`rect-1 ${
                    isOpen
                      ? "transition-all duration-500 rotate-90 ease-in-out origin-center"
                      : "transition-all duration-500 ease-in-out origin-center"
                  }`}
                  fill="white"
                  y="0"
                  width="100"
                  height="30"
                ></rect>
                <rect
                  className={`rect-2 ${
                    isOpen
                      ? "transition-all duration-500 rotate-90 ease-in-out origin-center"
                      : "transition-all duration-500 ease-in-out origin-center"
                  }`}
                  fill="white"
                  y="70"
                  width="100"
                  height="30"
                ></rect>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-5">
            <Link
              href="/games"
              className="bg-zinc-900 px-3 py-1 bg-center rounded outline outline-zinc-600 font-bold text-white hover:text-red-500"
            >
              Games
            </Link>
            <Link
              href="/login"
              className="bg-zinc-900 px-3 py-1 bg-center rounded outline outline-zinc-600 font-bold text-white hover:text-red-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="p-3 space-y-1 sm:px-3">
          <Link
            href="/games"
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Games
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
