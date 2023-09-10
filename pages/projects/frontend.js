import Link from "next/link";
import React from "react";
import ProjectCard from "../../components/Projects/ProjectCard";
import Head from "next/head";

function Frontend() {
  return (
    <div>
      <Head>
        <title>frontend projects | Sujoy Ghosh</title>
        <meta
          name="description"
          content="all the frontend side projects created by Sujoy Ghosh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar bg-base-100">
        <Link href="/#projects">
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
          Here&apos;s some of my frontend projects
        </h1>
        <section className="grid grid-cols-2 min-h-[75vh]">
          <ProjectCard
            bg="/projects/space-info.jpg"
            live="https://space-info.netlify.app/"
            title="Space Info"
            description="This is an educational website made using ReactJs, MUI and NASA open APIS to keep people updated about astronomical news and research works."
          />
          <ProjectCard
            bg="/projects/game-of-life.jpg"
            title="Game of life"
            description="This is The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
            live="https://sg-game-of-life.netlify.app/"
            github="https://github.com/SujoyGhosh-scott/The-Game-of-Life-using-React"
          />
          <ProjectCard
            bg="/projects/typing.jpg"
            title="Typing Test"
            description="This is a basic typing test website made using ReactJs and MUI"
          />
        </section>
      </main>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}

export default Frontend;
