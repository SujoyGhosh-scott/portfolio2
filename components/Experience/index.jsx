import Link from "next/link";
import React from "react";
// import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimeline2 from "./ExperienceTimeline2";

const Experience = () => {
  return (
    <div
      id="education"
      className="min-h-screen grid grid-cols-5 grid-rows-7 md:grid-rows-4 pb-6 px-8"
    >
      <div className="pt-12 pb-8 col-span-5 row-span-1">
        <h1 className="blowbrush text-3xl p-1 bg-gradient-to-b from-[#1f2833] to-[#1f2833] inline">
          Education and Experience
        </h1>
        <p className="mt-2 text-lg w-full md:w-[40vw]">
          Here&apos;s my education and professional journey so far. Along with
          some of the courses I&apos;ve done
        </p>
      </div>
      <div className="col-span-5 md:col-span-2 row-span-3 border-opacity-20">
        <ExperienceTimeline2 />
      </div>
      <div className="col-span-5 md:col-span-3 row-span-3 grid grid-rows-7 mt-8 md:mt-0">
        <p className="text-2xl blowbrush bg-neutral w-fit ml-8 mb-6 block md:hidden">
          Certificates
        </p>
        <div className="row-span-6 grid grid-cols-2 md:grid-cols-3 px-8">
          <div className="col-span-1 pr-2">
            <img src="/certificates/8051.png" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/udemy.webp"
                className="h-8 w-8 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">
                Embeded Systems using 8051 Microcontroller
              </p>
            </div>
            <img src="/certificates/frontend.png" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/freecodecamp.png"
                className="h-8 w-8 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">Frontend Development Libraries</p>
            </div>
            <div className="block md:hidden">
              <img src="/certificates/algo-ds.png" className="mb-2" />
              <div className="flex items-center mb-6">
                <img
                  src="/certificates/freecodecamp.png"
                  className="h-8 w-8 mr-2 object-contain rounded-full"
                  alt=""
                />
                <p className="text-sm">
                  Javascript Algorithm &amp; Data Structures
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 pt-10 pl-2 md:px-2">
            <img src="/certificates/cicd.png" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/codedamn.png"
                className="h-8 w-8 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">CI/CD with GitHub Actions</p>
            </div>
            <img src="/certificates/hosting.png" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/udemy.webp"
                className="h-7 w-7 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">
                Introduction to domain name and web hosting
              </p>
            </div>
            <div className="block md:hidden">
              <img src="/certificates/flutter.png" className="mb-2" />
              <div className="flex items-center mb-6">
                <img
                  src="/certificates/udemy.webp"
                  className="h-8 w-8 mr-2 object-contain rounded-full"
                  alt=""
                />
                <p className="text-sm">
                  Learn to create Apps using Flutter and Dart
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden md:block pl-2">
            <img src="/certificates/algo-ds.png" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/freecodecamp.png"
                className="h-8 w-8 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">
                Javascript Algorithm &amp; Data Structures
              </p>
            </div>
            <img src="/certificates/flutter.png" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/udemy.webp"
                className="h-8 w-8 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">
                Learn to create Apps using Flutter and Dart
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex justify-center">
          <Link href="/certificates">
            <button
              style={{ boxShadow: "-5px 5px #66FCF1" }}
              className="btn btn-md bg-neutral rounded-sm mt-10 border-2 border-gray-400"
            >
              See all certificates
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
