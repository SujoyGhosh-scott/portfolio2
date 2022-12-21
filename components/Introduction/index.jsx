import React from "react";

const Introduction = () => {
  return (
    <div id="intro" className="h-screen grid grid-cols-5">
      <div className="col-span-5 md:col-span-3 grid grid-rows-7">
        <div className="row-span-3 px-12 md:pd-16 pt-12 pb-1 font-serif">
          <h2 className="text-3xl">
            <span className="text-primary">Hello!</span> I&apos;m
          </h2>
          <h1 className="text-6xl text-primary">
            SUJOY
            <br /> &nbsp;&nbsp;&nbsp;GHOSH
          </h1>
        </div>
        <div className="row-span-4 bg-neutral px-12 md:px-16 py-10">
          <h2 className="text-3xl mb-4">A full-stack Web Developer</h2>
          <p className="pr-0 lg:pr-24">
            currently pursuing my masters&apos; majoring in Computer Sc from St.
            Xavier&apos;s College Kolkata, India. I&apos;m really passionate
            about Web Development and Looking for an opportunity to work as a
            dedicated and enthusiastic professional where my
          </p>

          <a
            href="#contact"
            className="btn btn-md btn-accent rounded-full mt-10 normal-case border-2 border-gray-900 text-gray-900 hover:scale-105"
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
        <div className="row-span-4 hidden md:flex bg-accent p-10 pb-0">
          {/* <div className="bg-red-100 h-full w-full"></div> */}
          <img
            className="h-full w-full"
            src="https://media.licdn.com/dms/image/C4D03AQGajcQS7VgHmA/profile-displayphoto-shrink_800_800/0/1658429903534?e=1677110400&v=beta&t=mP53bfslikBaVsjJUh1DPthkGnxkZRSjEd3HR_QjIRg"
            alt=""
          />
        </div>
        <div className="row-span-2 bg-secondary grid grid-cols-7">
          <div className="col-span-2 grid grid-rows-">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#171515] h-16 w-16 border-2 border-gray-900 m-4"
              ></div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#00B15D] h-16 w-16 border-2 border-gray-900  m-4"
              ></div>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-2">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#C5C6C7] h-16 w-16 border-2 border-gray-900 m-4"
              ></div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#0A66C2] h-16 w-16 border-2 border-gray-900 m-4"
              ></div>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-2">
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#E34033] h-16 w-16 border-2 border-gray-900 m-4"
              ></div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div
                style={{ boxShadow: "-5px 5px #1F2833" }}
                className="bg-[#FFA40F] h-16 w-16 border-2 border-gray-900 m-4"
              ></div>
            </div>
          </div>
          <div className="col-span-1">
            {/* <p className="text-base-100 font-bold rotate-90">GET CONNECTED</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
