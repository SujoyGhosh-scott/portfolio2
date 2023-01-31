import Link from "next/link";
import React from "react";
import ProjectCard from "../../components/Projects/ProjectCard";

function FullStack() {
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
          Here&apos;s some of my Full-Stack projects
        </h1>
        <section className="grid grid-cols-2 min-h-[75vh]">
          <ProjectCard
            bg="/projects/aesthetic.jpg"
            live="https://aesthetic-codebase.vercel.app/"
            title="Aesthetic Products"
            description="This is an e-commerce website to sell herbal products made using NextJs, MongoDB, tailwindCSS and hosted on Vercel."
          />
          <ProjectCard
            bg="/projects/attendance-tracker.jpg"
            title="Attendance Tracker"
            description="Attendance percentage tracking website for students made using NextJs, Daisy UI, mongodb and hosted on Netlify."
            live="https://track-attendance.netlify.app/"
            github="https://github.com/SujoyGhosh-scott/The-Game-of-Life-using-React"
          />
          <ProjectCard
            bg="/projects/crypto.jpg"
            title="Crypto Predictor"
            description="This website helps to keep people updated about the crypto world. It shows live values of different cryptocurrencies and makes a 24hr price prediction, along with this users can read news about the crypto world."
            live="https://crypto-predictor-staging.netlify.app/"
          />
        </section>
      </main>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}

export default FullStack;
