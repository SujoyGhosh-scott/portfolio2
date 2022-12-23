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
          <li class="mb-6 ml-4">
            {/* this is the circle */}
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun, 22 to Present
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-black flex"
              style={{ boxShadow: "-5px 5px #66fcf1" }}
            >
              <img
                className="h-8 w-8 object-contain mr-2"
                src="/experience/yubi-health.png"
                alt=""
              />
              <div className="flex-1">
                <h3 class="font-semibold dark:text-white">Yubi Health</h3>
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </li>
          <li class="mb-6 ml-4">
            {/* this is the circle */}
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Mar, 22 to Apr, 22
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-black flex"
              style={{ boxShadow: "-5px 5px #66fcf1" }}
            >
              <img
                className="h-10 w-10 -ml-2 mr-1 object-contain"
                src="/experience/whales-network.png"
                alt=""
              />
              <div className="flex-1">
                <h3 class="font-semibold dark:text-white">Whales Network</h3>
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  App Developer
                </p>
              </div>
            </div>
          </li>
          <li class="mb-6 ml-4">
            {/* this is the circle */}
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb, 21 to Dec, 21
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-black flex"
              style={{ boxShadow: "-5px 5px #66fcf1" }}
            >
              <img
                className="h-8 w-8 mr-2 object-contain"
                src="/experience/support-genie.png"
                alt=""
              />
              <div className="flex-1">
                <h3 class="font-semibold dark:text-white">Support Genie</h3>
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </li>
          <li class="mb-6 ml-4">
            {/* this is the circle */}
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
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
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Started <strong>MSc</strong> course in Computer Science from{" "}
                  <strong>St. Xavier&apos;s College</strong>, Kolkata
                </p>
              </div>
            </div>
          </li>
          <li class="mb-6 ml-4">
            {/* this is the circle */}
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun, 2018 to Jul, 2021
            </time>
            <div
              className="bg-neutral p-2 h-16 w-4/5 border-2 border-accent flex"
              style={{ boxShadow: "-5px 5px #007BE5" }}
            >
              <img
                className="h-8 w-8 mr-2 object-contain"
                src="/experience/cu.png"
                alt=""
              />
              <div className="flex-1">
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
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
            <img src="/certificates/digital-marketing.jpg" className="mb-2" />
            <div className="flex items-center mb-6">
              <img
                src="/certificates/google.png"
                className="h-7 w-7 mr-2 object-contain rounded-full"
                alt=""
              />
              <p className="text-sm">Fundamentals of Digital Marketing</p>
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
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
