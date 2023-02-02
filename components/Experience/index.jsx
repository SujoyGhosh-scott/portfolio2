import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div
      id="education"
      className="min-h-screen grid grid-cols-5 grid-rows-7 md:grid-rows-4 pb-6"
    >
      <div className="pt-12 pb-8 pl-8 col-span-5 row-span-1">
        <h1 className="blowbrush text-3xl p-1 bg-gradient-to-b from-[#1f2833] to-[#1f2833] inline">
          Education and Experience
        </h1>
        <p className="mt-2 text-lg w-full md:w-[40vw]">
          Here&apos;s my education and professional journey so far. Along with
          some of the courses I&apos;ve done
        </p>
      </div>
      <div className="col-span-5 md:col-span-2 row-span-3 border-opacity-20 pl-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-6 ml-4">
            {/* this is the circle */}
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border flex justify-center items-center bg-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#007BE5]"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                  clipRule="evenodd"
                />
                <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
              </svg>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun, 22 to Present
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-[#007BE5] flex"
              style={{ boxShadow: "-5px 5px #66fcf1" }}
            >
              <img
                className="h-8 w-8 object-contain mr-2"
                src="/experience/yubi-health.png"
                alt=""
              />
              <div className="flex-1">
                <h3 className="font-semibold dark:text-white">Yubi Health</h3>
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </li>
          <li className="mb-6 ml-4">
            {/* this is the circle */}
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border flex justify-center items-center bg-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#007BE5]"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                  clipRule="evenodd"
                />
                <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
              </svg>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Mar, 22 to Apr, 22
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-[#007BE5] flex"
              style={{ boxShadow: "-5px 5px #66fcf1" }}
            >
              <img
                className="h-10 w-10 -ml-2 mr-1 object-contain"
                src="/experience/whales-network.png"
                alt=""
              />
              <div className="flex-1">
                <h3 className="font-semibold dark:text-white">
                  Whales Network
                </h3>
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  App Developer
                </p>
              </div>
            </div>
          </li>
          <li className="mb-6 ml-4">
            {/* this is the circle */}
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border flex justify-center items-center bg-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#007BE5]"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                  clipRule="evenodd"
                />
                <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
              </svg>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb, 21 to Dec, 21
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-[#007BE5] flex"
              style={{ boxShadow: "-5px 5px #66fcf1" }}
            >
              <img
                className="h-8 w-8 mr-2 object-contain"
                src="/experience/support-genie.png"
                alt=""
              />
              <div className="flex-1">
                <h3 className="font-semibold dark:text-white">Support Genie</h3>
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </li>
          <li className="mb-6 ml-4">
            {/* this is the circle */}
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border flex justify-center items-center bg-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#007BE5]"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Aug, 21 to Present
            </time>
            <div
              className="bg-neutral p-2 h-20 w-4/5 border-2 border-accent flex"
              style={{ boxShadow: "-5px 5px #007BE5" }}
            >
              <img
                className="h-8 w-8 mr-2 object-contain"
                src="/experience/xaviers.png"
                alt=""
              />
              <div className="flex-1">
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Started <strong>MSc</strong> course in Computer Science from{" "}
                  <strong>St. Xavier&apos;s College</strong>, Kolkata
                </p>
              </div>
            </div>
          </li>
          <li className="mb-6 ml-4">
            {/* this is the circle */}
            <div className="absolute w-4 h-4 rounded-full mt-1.5 -left-2 border flex justify-center items-center bg-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#007BE5]"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun, 2018 to Jul, 2021
            </time>
            <div
              className="bg-neutral p-2 h-18 md:h-16 w-4/5 border-2 border-accent flex"
              style={{ boxShadow: "-5px 5px #007BE5" }}
            >
              <img
                className="h-8 w-8 mr-2 object-contain"
                src="/experience/cu.png"
                alt=""
              />
              <div className="flex-1">
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Completed <strong>BSc</strong> in Computer Science from{" "}
                  <strong>University of Calcutta</strong>
                </p>
              </div>
            </div>
          </li>
        </ol>
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
              className="btn btn-accent btn-md normal-case rounded-full hover:scale-105 text-lg border-2 border-black"
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
