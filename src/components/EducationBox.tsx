import React from "react";

interface EducationBoxProps {
    year: string;
    course: string;
    institute: string;
    city: string;
    delay: number;
}

function EducationBox({
  year,
  course,
  institute,
  city,
  delay,
}: EducationBoxProps) {
  return (
    <div className="mb-10 ml-8">
      {/* Dot */}
      <div
        className="absolute w-6 h-6 bg-sky-500 rounded-full -left-3.5 border-4 border-white"
        data-aos="zoom-in"
        data-aos-delay={delay + 200}
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="0"
      ></div>
      {/* Timeline Content */}
      <div
        className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        data-aos="fade-left"
        data-aos-delay={delay + 300}
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="0"
      >
        <span className="text-sm text-gray-500 dark:text-gray-300">{year}</span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {course}
        </h3>
        <h4 className="text-md text-gray-600 dark:text-gray-400">
          {institute} , {city}
        </h4>
      </div>
    </div>
  );
}

export default EducationBox;
