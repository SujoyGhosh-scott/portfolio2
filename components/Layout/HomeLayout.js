import React from "react";
import Head from "next/head";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Sujoy Ghosh | Web Developer</title>
        <meta
          name="description"
          content="Portfolio website of Sujoy Ghosh, Full-stack web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="drawer drawer-mobile">
        <input
          id="my-drawer-2"
          onChange={(e) => console.log(e.target.value)}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm btn-neutral drawer-button lg:hidden fixed top-2 right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </label>
          {children}
        </div>
        <div className="drawer-side py-6 w-[50vw] md:w-[15vw]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-2 bg-base-100 text-base-content ml-0 md:ml-10 border-l border-opacity-40 border-gray-600">
            <li className="text-sm">
              <a
                href="#intro"
                onClick={() => {
                  document.getElementById("my-drawer-2").click();
                }}
              >
                Introduction
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#tools"
                onClick={() => {
                  document.getElementById("my-drawer-2").click();
                }}
              >
                Languages <br />
                and tools
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#education"
                onClick={() => {
                  document.getElementById("my-drawer-2").click();
                }}
              >
                Education, <br />
                experiences and <br />
                courses
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#client-projects"
                onClick={() => {
                  document.getElementById("my-drawer-2").click();
                }}
              >
                Client Projects
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#projects"
                onClick={() => {
                  document.getElementById("my-drawer-2").click();
                }}
              >
                Personal Projects
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#contact"
                onClick={() => {
                  document.getElementById("my-drawer-2").click();
                }}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
