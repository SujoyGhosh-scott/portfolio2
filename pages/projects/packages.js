import Link from "next/link";
import React from "react";
import ProjectCard from "../../components/Projects/ProjectCard";

function Packages() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <Link href="/">
          <button className="btn btn-ghost normal-case text-2xl font-extralight blowbrush">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Home
          </button>
        </Link>
      </div>
      <main className="px-0 md:px-64 mb-4">
        <h1 className="text-2xl blowbrush text-center my-8 md:my-10 px-6">
          No modules published yet
        </h1>
        <section className="grid grid-cols-2"></section>
      </main>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}

export default Packages;
