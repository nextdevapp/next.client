import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const StorefrontHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img
                  className="h-8 w-8"
                  src="https://i.pinimg.com/550x/dc/7e/d8/dc7ed80a600c5f87c2f8973cae429ce2.jpg"
                  alt="Workflow"
                /> */}
                <Image
                  src="https://res.cloudinary.com/dedx6zewi/image/upload/v1650898959/dc7ed80a600c5f87c2f8973cae429ce2_w288dw.jpg"
                  width="24"
                  height="24"
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a
                      href="#"
                      className=" hover:bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      HOME
                    </a>
                  </Link>
                  <Link href="/shop">
                    <a
                      href="#"
                      className=" hover:bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SHOP
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      href="#"
                      className=" hover:bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      ABOUT
                    </a>
                  </Link>
                  <Link href="/news">
                    <a
                      href="#"
                      className=" hover:bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      NEWS
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      href="#"
                      className=" hover:bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      CONTACT
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default StorefrontHeader;
