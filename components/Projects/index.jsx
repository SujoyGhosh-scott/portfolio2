import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="grid grid-rows-4">
      <div className="pl-8 row-span-1 mb-8">
        <h1 className="blowbrush text-3xl font-normal bg-neutral w-fit mt-8">
          My Projects
        </h1>
        <p className="mt-2">Click on a card below to see all my projects</p>
      </div>
      <div className="px-16 row-span-3 grid grid-cols-4 overflow-hidden -ml-6 md:0 mb-10 md:mb-0">
        <div
          style={{ transform: "skewX(-11deg)" }}
          className="col-span-2 md:col-span-1 flex items-center hover:text-primary bg-neutral-focus border border-white border-opacity-50"
        >
          <Link href="/projects/frontend" className="w-full">
            <div
              style={{ transform: "skewX(11deg)" }}
              className="flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-2xl blowbrush text-primary">Fontend</h2>
              <p className="w-4/5">frontend projects using 3rd party APIs</p>
            </div>
          </Link>
        </div>
        <div
          style={{ transform: "skewX(-11deg)" }}
          className="col-span-2 md:col-span-1 flex items-center hover:text-primary bg-base-100 border border-white border-opacity-50"
        >
          <Link href="/projects/full-stack" className="w-full">
            <div
              style={{ transform: "skewX(11deg)" }}
              className="w-full flex flex-col items-center"
            >
              <h2 className="text-2xl blowbrush text-primary">Full Stack</h2>
              <p className="w-4/5 text-center">full-stack hosted apps</p>
            </div>
          </Link>
        </div>
        <div
          style={{ transform: "skewX(-11deg)" }}
          className="col-span-2 md:col-span-1 flex items-center hover:text-primary bg-base-100 md:bg-neutral-focus border border-white border-opacity-50"
        >
          <Link href="/projects/packages" className="w-full">
            <div
              style={{ transform: "skewX(11deg)" }}
              className="flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-2xl blowbrush text-primary">Node modules</h2>
              <p className="w-4/5">Some of the node modules I made</p>
            </div>
          </Link>
        </div>
        <div
          style={{ transform: "skewX(-11deg)" }}
          className="col-span-2 md:col-span-1 flex items-center hover:text-primary bg-neutral-focus md:bg-base-100 border border-white border-opacity-50"
        >
          <Link className="w-full" href="/projects/uiux">
            <div
              style={{ transform: "skewX(11deg)" }}
              className="flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-2xl blowbrush text-primary">UI/UX</h2>
              <p className="w-4/5">Some of the User Interfaces I designed</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
