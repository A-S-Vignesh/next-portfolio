"use client";

import React from "react";
import { logoimage } from "@/components/Images";
import { ReactTyped } from "react-typed";
import Image from "next/image";

function Home() {
const scrollToHero = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section
      id="home"
      className="bg-linear-to-b from-custom-gradientblue to-custom-gradientwhite dark:from-custom-gradientdarkgrey dark:to-custom-gradientgrey min-h-screen flex flex-col justify-center items-center pt-8 md:pt-12 px-4 md:px-8 relative overflow-hidden"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl 2xl:max-w-[85%] mx-auto px-4"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6 md:px-10">
          <h4 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight py-1 text-black dark:text-white">
            Hi there,
          </h4>
          <h4 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight py-1 text-black dark:text-white">
            I am
          </h4>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-blue-700 dark:text-blue-400 py-2 tracking-tight">
            Vignesh A S
          </h2>

          <h1 className="font-bold text-blue-600 dark:text-blue-500 py-3">
            <ReactTyped
              strings={[
                "A Web Developer",
                "A Full Stack Developer",
                "A MERN Stack Developer",
                "A Programmer",
              ]}
              typeSpeed={90}
              backSpeed={40}
              loop
              cursorChar="|"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            />
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/vickywithpenguin2.png"
            alt="Main Visual"
            width={500}
            height={500}
            className="w-64 sm:w-80 md:w-[400px] h-auto rounded-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={scrollToHero}
          className="flex flex-col items-center animate-bounce cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-yellow-500 dark:text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="mt-2 text-sm font-medium">Scroll</span>
        </button>
      </div>
    </section>
  );
}

export default Home;
