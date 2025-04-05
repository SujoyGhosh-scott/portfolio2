import React from "react";
import SocialCarousel from "./SocialCarousel";

const Introduction = () => {
  return (
    <div id="intro" className="min-h-screen grid grid-cols-5">
      <div className="col-span-5 md:col-span-3 grid grid-rows-7">
        <div className="row-span-3 px-12 md:px-16 md:pd-16 pt-12 pb-8 flex flex-col justify-center">
          <h2 className="text-3xl font-normal blowbrush">
            <span className="text-[#007BE5] text-4xl">Hello!</span> I&apos;m
          </h2>
          <h1 className="text-6xl text-primary blowbrush">Sujoy</h1>
          <h2 className="text-2xl mt-2 mb-4 blowbrush font-normal">
            Full-Stack Web Developer
          </h2>
        </div>
        <div className="row-span-4 bg-neutral px-12 md:px-16 pt-8 pb-12">
          <p className="pr-0 lg:w-3/4">
            A Masters&apos;s in Computer Science and a Full Stack Web Developer.
            I&apos;m really passionate about web development and always
            exploring new tools and trying to sharpen my skills. I want to use
            my skills and knowledge to develop applications that can impact
            people&apos;s lives.
          </p>

          <div className="flex flex-wrap md:gap-6">
            <a
              href="#client-projects"
              className="btn btn-md bg-[#171515] rounded-sm mt-10 border-2 border-gray-400"
              style={{ boxShadow: "-5px 5px #007BE5" }}
            >
              See Client Projects
            </a>
            <a
              href="#contact"
              className="btn btn-md bg-[#171515] rounded-sm mt-10 border-2 border-gray-400"
              style={{ boxShadow: "-5px 5px #007BE5" }}
            >
              Drop a message
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 grid grid-rows-6">
        <div className="row-span-4 hidden md:flex justify-center items-center bg-accent p-10">
          <div className="h-full w-full bg-[url(/introImage.jpg)] bg-no-repeat bg-center"></div>
          {/* <img
            className="w-10/12 object-contain"
            src="/introImage.jpg"
            alt="sujoy ghosh, web developer image"
          /> */}
        </div>
        <SocialCarousel />
      </div>
    </div>
  );
};

export default Introduction;
