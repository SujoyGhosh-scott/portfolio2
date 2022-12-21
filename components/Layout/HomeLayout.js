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
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm btn-neutral drawer-button lg:hidden fixed top-2 left-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
        <div className="drawer-side py-6 max-w-[300px]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-2 bg-base-100 text-base-content pl-12">
            <li className="text-sm">
              <a href="#intro">Introduction</a>
            </li>
            <li className="text-sm">
              <a href="#tools">
                Languages <br />
                and tools
              </a>
            </li>
            <li className="text-sm">
              <a href="#education">
                Education, <br />
                experiences and <br />
                courses
              </a>
            </li>
            <li className="text-sm">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-sm">
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default HomeLayout;
