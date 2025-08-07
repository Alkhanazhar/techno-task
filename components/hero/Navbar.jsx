"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Features", route: "/features" },
    { name: "Solution", route: "/solution" },
    { name: "Pricing", route: "/pricing" },
    { name: "Contact Us", route: "/contact" },
  ];

  const handleNav = (route) => {
    setIsOpen(false);
    router.push(route);
  };

  return (
    <div className="pb-8 py-3">
      <nav className="w-full fixed px-4 z-50 md:px-10 flex items-center justify-between">

        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <div>
          <img src="/logo.png" alt="logo" className="h-9" />
            {/* <h1 className="text-white font-bold text-lg leading-tight">Convoze</h1> */}
            {/* <p className="text-[10px] text-gray-300 tracking-wide uppercase font-medium">
              A Speech Analytics Platform
            </p> */}
          </div>
        </div>

        <div className="hidden md:flex bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-50/10 rounded-full px-12 py-3 space-x-8 text-sm">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.route)}
              className="text-white cursor-pointer hover:text-purple-400 transition-all duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => router.push("/get-started")}
          className="hidden md:inline-block bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200"
        >
          Get Started
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          <Menu />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-end">
          <div className="w-[70%] bg-[#1a1a1a] h-full p-6 shadow-lg">
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNav(item.route)}
                    className="text-white text-lg font-medium hover:text-purple-400 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleNav("/get-started")}
              className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200 w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
