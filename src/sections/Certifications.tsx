"use client";

import Image from "next/image";
import certificationDetails from "@/utils/certificationDetails";
import Tag from "@/components/Tag";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 lg:py-16">
      <div className="w-full max-w-7xl 2xl:max-w-[85%] mx-auto px-4">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col items-center justify-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Certifications
          </h2>
          <hr className="w-[60px] border-b-4 m-4 border-custom-textblue" />
        </div>

        <p
          className="text-base md:text-lg text-center mb-10 md:mb-14 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Courses I&apos;ve completed to deepen my technical expertise
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationDetails.map((cert, index) => (
            <div
              key={cert.id}
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
            >
              {/* Certificate thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={420}
                  className="w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Platform badge */}
                <span
                  className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded ${
                    cert.platform === "Udemy"
                      ? "bg-[#a435f0]"
                      : "bg-red-700"
                  }`}
                >
                  {cert.platform}
                </span>

                {/* Elite badge */}
                {cert.badge && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {cert.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 leading-snug line-clamp-3">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.instructor}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span>{cert.date}</span>
                  <span>•</span>
                  <span>{cert.duration}</span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Tag key={skill} text={skill} />
                  ))}
                </div>

                {/* View Certificate link */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-sky-500 hover:text-sky-400 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
