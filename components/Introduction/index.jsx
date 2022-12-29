import React from "react";

const Introduction = () => {
  return (
    <div id="intro" className="min-h-screen grid grid-cols-5">
      <div className="col-span-5 md:col-span-3 grid grid-rows-7">
        <div className="row-span-3 px-12 md:px-16 md:pd-16 pt-12 pb-8 blowbrush flex flex-col justify-center">
          <h2 className="text-3xl">
            <span className="text-primary text-4xl">Hello!</span> I&apos;m
          </h2>
          <h1 className="text-6xl text-primary">
            SUJOY
            <br /> &nbsp;&nbsp;&nbsp;GHOSH
          </h1>
        </div>
        <div className="row-span-4 bg-neutral px-12 md:px-16 pt-8 pb-12">
          <h2 className="text-3xl mb-4 blowbrush">
            A full-stack Web Developer
          </h2>
          <p className="pr-0 lg:w-3/4">
            currently pursuing my masters&apos; majoring in Computer Sc from St.
            Xavier&apos;s College Kolkata, India. I&apos;m really passionate
            about Web Development and Looking for an opportunity to work as a
            dedicated and enthusiastic professional where my
          </p>

          <a
            href="#contact"
            className="btn btn-md btn-accent text-lg font-semibold rounded-full mt-10 normal-case border-2 border-gray-900 text-gray-900 hover:scale-105"
            style={{ boxShadow: "-5px 5px #66FCF1" }}
          >
            Drop a message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 grid grid-rows-6">
        <div className="row-span-4 hidden md:flex justify-center items-end bg-accent">
          <img
            className="w-10/12 object-contain"
            src="/introImage.png"
            alt="sujoy ghosh, web developer image"
          />
        </div>
        <div className="row-span-6 md:row-span-2 bg-secondary grid grid-cols-7">
          <div className="col-span-2 grid grid-rows-">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#171515] h-24 w-24 border-2 border-gray-900 flex m-4 justify-center items-center"
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
                className="bg-[#00B15D] h-24 w-24 border-2 border-gray-900  m-4 flex justify-center items-center"
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
                className="bg-[#C5C6C7] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center"
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
                className="bg-[#0A66C2] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center"
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
                className="bg-[#E34033] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center"
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
                className="bg-[#FFA40F] h-24 w-24 border-2 border-gray-900 m-4 flex justify-center items-center"
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
            <p className="blowbrush text-base-100 text-lg tracking-wide rotate-90 mt-12 md:mt-14">
              Get&nbsp;&nbsp;connected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
