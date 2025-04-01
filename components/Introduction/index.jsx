import React from "react";

const Introduction = () => {
  return (
    <div id="intro" className="min-h-screen grid grid-cols-5">
      <div className="col-span-5 md:col-span-3 grid grid-rows-7">
        <div className="row-span-3 px-12 md:px-16 md:pd-16 pt-12 pb-8 flex flex-col justify-center">
          <h2 className="text-3xl font-normal">
            <span className="text-primary text-4xl blowbrush">Hello!</span>{" "}
            I&apos;m
          </h2>
          <h1 className="text-6xl text-primary blowbrush">SUJOY</h1>
          <h2 className="text-2xl mb-4 blowbrush font-normal">
            A full-stack Web Developer
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

          <div className="flex flex-wrap gap-6">
            <a
              href="#contact"
              className="btn btn-md bg-[#171515] rounded-sm mt-10 border-2 border-gray-400"
              style={{ boxShadow: "-5px 5px #007BE5" }}
            >
              See Previous Projects
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
        <div className="row-span-4 hidden md:flex justify-center items-end bg-accent">
          <img
            className="w-10/12 object-contain"
            src="/introImage.jpg"
            alt="sujoy ghosh, web developer image"
          />
        </div>
        <div className="row-span-6 md:row-span-2 bg-secondary grid grid-cols-7">
          <div className="col-span-2 grid grid-rows-">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#171515] h-24 w-24 border-2 border-gray-900 flex m-4 justify-center items-center hover:scale-105"
              >
                <div className="h-3/5 w-3/5">
                  <a
                    href="https://github.com/SujoyGhosh-scott"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src="/social/github.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#00B15D] h-24 w-24 border-2 border-gray-900  m-4 flex justify-center items-center hover:scale-105"
              >
                <div className="h-3/5 w-3/5">
                  <a
                    href="https://www.hackerrank.com/Sujoy_Ghosh"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src="/social/hackerrank.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-2">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#C5C6C7] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center hover:scale-105"
              >
                <div className="h-3/5 w-3/5">
                  <a
                    href="https://www.npmjs.com/~sujoyghosh"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src="/social/npm2.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#0A66C2] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center hover:scale-105"
              >
                <div className="h-3/5 w-3/5">
                  <a
                    href="https://www.linkedin.com/in/sujoy-ghosh2000/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src="/social/linkedin.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-2">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#E34033] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center hover:scale-105"
              >
                <div className="h-3/5 w-3/5">
                  <a href="#" rel="noreferrer" target="_blank">
                    <img src="/social/gmail.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#FFA40F] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center hover:scale-105"
              >
                <div className="h-2/4 w-2/4">
                  <a
                    href="https://leetcode.com/ghoshsujoy336/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src="/social/leetcode.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <p className="blowbrush text-base-100 text-xl tracking-wide rotate-90 mt-20 md:mt-24">
              Get&nbsp;&nbsp;connected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
