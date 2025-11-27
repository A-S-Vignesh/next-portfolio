// import React from "react";
// import Tag from "./Tag";

// function ProjectBox({
//   name,
//   type = "personal",
//   detail,
//   image,
//   gitlink,
//   livedemo,
//   fade,
//   techstack,
// }) {
//   return (
//     <div
//       className="card group w-full shadow-custom-dark bg-custom-blue transition-all duration-300 ease-out hover:scale-[1.02] dark:bg-custom-darkblue dark:shadow-custom-light relative overflow-hidden"
//       data-aos={fade}
//       data-aos-easing="ease-out-cubic"
//       data-aos-duration="600"
//     >
//       <figure className="relative overflow-hidden">
//         <img
//           className="w-full aspect-video object-cover border-b-2 dark:border-slate-600 transform transition-transform duration-500 ease-out group-hover:scale-105"
//           src={image}
//           alt={name}
//           loading="lazy"
//           data-aos="zoom-out"
//           data-aos-delay="200"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </figure>

//       <div className="card-body p-4">
//         <div className="flex flex-wrap gap-2 mb-4" data-aos="fade-in">
//           {techstack.map((item, index) => (
//             <Tag
//               key={index}
//               text={item}
//               data-aos="fade-right"
//               data-aos-delay={100 * index}
//             />
//           ))}
//         </div>

//         <h2
//           className="card-title text-sky-500 font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-sky-400"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {name}
//         </h2>

//         <p
//           className="text-sm/6 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
//           data-aos="fade-up"
//           data-aos-delay="250"
//         >
//           {detail}
//         </p>

//         <div className="card-actions justify-between">
//           {type === "personal" && (
//             <a
//               href={gitlink}
//               className="btn btn-outline btn-info transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
//               target="_blank"
//               rel="noreferrer"
//               data-aos="zoom-in"
//               data-aos-delay="300"
//             >
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 480 512"
//                 className="h-4 w-4 mr-2"
//               >
//                 <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
//               </svg>
//               Git
//             </a>
//           )}

//           <a
//             href={livedemo}
//             className="btn btn-outline btn-info transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
//             target="_blank"
//             rel="noreferrer"
//             data-aos="zoom-in"
//             data-aos-delay="350"
//           >
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0" // Fixed typo: strokeidth → strokeWidth
//               viewBox="0 0 16 16"
//               className="h-4 w-4 mr-2"
//             >
//               <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
//             </svg>
//             Demo
//           </a>
//         </div>
//       </div>

//       {/* Hover effect elements */}
//       <div className="absolute inset-0 -z-10 group-hover:bg-sky-900/5 dark:group-hover:bg-sky-500/5 transition-all duration-500 rounded-lg" />
//       <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500/10 transition-all duration-300 rounded-lg pointer-events-none" />
//     </div>
//   );
// }

// export default ProjectBox;

"use client";

import React from "react";
import Tag from "./Tag";
import Image from "next/image";

interface ProjectBoxProps {
  id: number;
  name: string;
  type?: "personal" | "client";
  detail: string;
  image: string;
  gitlink: string;
  livedemo: string;
  techstack: string[];
}

function ProjectBox({
  id,
  name,
  type = "personal",
  detail,
  image,
  gitlink,
  livedemo,
  techstack,
}: ProjectBoxProps) {
  return (
    <div
      className="card w-full shadow-custom-dark bg-custom-blue transition-all duration-300 ease-out hover:scale-[1.02] dark:bg-custom-darkblue dark:shadow-custom-light relative overflow-hidden"
      data-aos="fade-up" // animate whole card
      data-aos-easing="ease-out-cubic"
      data-aos-duration="900"
      data-aos-delay={id * 150}
    >
      {/* Image */}
      <figure className="relative overflow-hidden">
        <Image
          className="w-full aspect-video object-cover border-b-2 dark:border-slate-600 transform transition-transform duration-1000 ease-out hover:scale-110"
          src={image}
          alt={name}
          width={1080}
          height={600}
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        {/* Tech stack tags (no AOS, keep hover clean) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techstack.map((item, index) => (
            <Tag key={index} text={item} />
          ))}
        </div>

        <h2 className="card-title text-sky-500 font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-sky-400">
          {name}
        </h2>

        <p className="text-sm/6 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300 text-black dark:text-white">
          {detail}
        </p>

        {/* Actions */}
        <div className="card-actions justify-between">
          {type === "personal" && (
            <a
              href={gitlink}
              className="btn btn-outline btn-info transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
              target="_blank"
              rel="noreferrer"
            >
              {/* GitHub Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 480 512"
                className="h-4 w-4 mr-2"
              >
                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
              </svg>
              Git
            </a>
          )}

          <a
            href={livedemo}
            className="btn btn-outline btn-info transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
            target="_blank"
            rel="noreferrer"
          >
            {/* Demo Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="h-4 w-4 mr-2"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
