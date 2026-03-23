import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ projects }) => {
  console.log(projects);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <>
      <div className="static">
        <div className="relative w-full max-w-4xl mx-auto sm:my-8">
          <div>
            <button
              onClick={prevSlide}
              className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
          {projects
            .filter((_, index) => index === current)
            .map((project, index) => (
              <div key={index} className="p-4">
                <div className=" bg-white text-[#323954] shadow-lg rounded-lg p-4">
                  <div className="flex flex-row gap-4 justify-between">
                    <h3 className="text-2xl font-semibold py-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-x-2 justify-center items-start">
                      {project?.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          className="font-bold text-lg text-[#fefffa] cursor-pointer px-4 py-2 rounded-md bg-[#ea5147] hover:bg-[#323954]"
                        >
                          live
                        </a>
                      ) : (
                        <span
                          className="font-bold text-lg text-gray-400 cursor-not-allowed px-4 py-2 rounded-md bg-gray-300"
                          title="Private respository"
                        >
                          live
                        </span>
                      )}

                      {project?.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          className="font-bold text-lg text-[#fefffa] cursor-pointer px-4 py-2 rounded-md bg-[#ea5147] hover:bg-[#323954]"
                        >
                          code
                        </a>
                      ) : (
                        <span
                          className="font-bold text-lg text-gray-400 cursor-not-allowed px-4 py-2 rounded-md bg-gray-300"
                          title="live link not available"
                        >
                          code
                        </span>
                      )}
                    </div>
                  </div>

                  <img
                    src={project.graphicImage}
                    alt={project.title}
                    className="w-full mx-auto h-96 border-0 rounded-lg mt-4"
                  />
                  <h3 className="text-base font-semibold mt-4 px-4">
                    {project.type}
                  </h3>
                  <p className="text-lg px-4  text-wrap">
                    {project.description}
                  </p>
                  <p className="text-sm mt-2 px-4">
                    Tech Stake: {project.techStack}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
