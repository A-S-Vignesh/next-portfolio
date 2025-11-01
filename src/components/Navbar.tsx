"use client";

import React, { useState, useEffect } from "react";
import { logoimage } from "./Images";
import Image from "next/image";
import DarkmodeToggle from "./DarkmodeToggle";
// import DarkMode from "./DarkMode";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80; // Adjust this to match your sticky navbar height

    if (!element) return; // ✅ Prevents null error

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });

    if (isOpen) toggleMenu(); // Close mobile menu after scrolling
  };

  return (
    <nav className="sticky top-0 w-full bg-custom-navbarcolor dark:bg-custom-grey shadow-custom-navbar z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-500">
          <button onClick={() => handleScroll("home")}>
            <Image
              className="h-[45px]"
              src={logoimage}
              alt="Vignesh portfolio Logo"
              width={200}
              height={100}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:justify-start md:items-center space-x-8">
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="text-black font-bold dark:text-white hover:text-sky-500 transition duration-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="text-black font-bold dark:text-white hover:text-sky-500 transition duration-500"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="text-black font-bold dark:text-white hover:text-sky-500 transition duration-500"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="text-black font-bold dark:text-white hover:text-sky-500 transition duration-500"
            >
              Contact
            </button>
          </li>
          <li className="flex justify-between items-center">
            <DarkmodeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 z-40 translate-x-0"
            : "opacity-0 z-0 translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="space-y-8 text-center">
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-sky-500 transition "
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
            >
              Contact
            </button>
          </li>
          <li className="flex justify-between items-center">
            <DarkmodeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
