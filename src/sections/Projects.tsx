import React from "react";
import ProjectBox from "../components/ProjectBox";
import projectDetails, { clientProjects } from "../utils/projectDetails";

function Project() {
  return (
    <section id="projects" className="mb-8">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex flex-col items-center justify-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          Projects
        </h2>
        <hr className="w-[70px] border-b-4 m-4 border-custom-textblue" />
      </div>

      <p
        className="text-base md:text-lg text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-200 font-medium max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Projects I’ve Worked On
      </p>

      <div className="w-full max-w-7xl 2xl:max-w-[85%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectDetails.map((data) => {
            return (
              <ProjectBox
                key={data.id}
                id={data.id}
                type="personal"
                name={data.name}
                image={data.image}
                detail={data.description}
                techstack={data.techstack}
                gitlink={data.gitlink}
                livedemo={data.livedemo}
              />
            );
          })}
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex flex-col items-center justify-center my-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          Client Projects
        </h2>
        <hr className="w-[70px] border-b-4 m-4 border-custom-textblue" />
      </div>

      <p
        className="text-base md:text-lg text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-200 font-medium max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Projects I’ve Worked On
      </p>

      <div className="w-full max-w-7xl 2xl:max-w-[85%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((data) => {
            return (
              <ProjectBox
                key={data.id}
                type="client"
                id={data.id}
                name={data.name}
                image={data.image}
                detail={data.description}
                techstack={data.techstack}
                gitlink={data.gitlink}
                livedemo={data.livedemo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
