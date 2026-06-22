import React from "react";
import EducationBox from "../components/EducationBox";
import educationDetails from "../utils/EducationDetails";
import Image from "next/image";

function Education() {
  return (
    <section id="education" data-aos="fade-up" data-aos-duration="600">
      <div className="w-full max-w-7xl 2xl:max-w-[85%] mx-auto px-4 py-12 overflow-hidden">
        <div
          className="flex flex-col items-center justify-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Education Timeline
          </h2>
          <hr className="w-[60px] border-b-4 m-4 border-custom-textblue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* Profile card */}
          <div data-aos="fade-right" data-aos-delay="300">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden w-full h-full flex flex-col">
              {/* Photo — stretches to fill height */}
              <div className="relative w-full flex-1 min-h-[300px]">
                <Image
                  src="https://ik.imagekit.io/asvignesh/portfolio/me/me.png"
                  alt="Vignesh A S"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Available badge over photo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow text-xs font-semibold text-gray-700 dark:text-gray-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for opportunities
                </div>
              </div>

            </div>
          </div>

          {/* Timeline */}
          <div
            className="relative border-l-4 border-sky-500"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {educationDetails.map((edu, index) => (
              <EducationBox
                key={edu.id}
                year={edu.year}
                course={edu.course}
                institute={edu.institute}
                city={edu.city}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
