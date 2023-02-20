import Link from "next/link";
import React from "react";
import Head from "next/head";

function Packages() {
  return (
    <div>
      <Head>
        <title>npm packages | Sujoy Ghosh</title>
        <meta
          name="description"
          content="all the npm packages and react-component libreries created by Sujoy Ghosh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <main className="px-8 md:px-64 mb-4">
        <h1 className="text-2xl blowbrush text-center my-8 md:my-10 px-6">
          List of npm packages and react component libraries{" "}
        </h1>
        <section className="grid grid-cols-6">
          <div className="card shadow-xl bg-white bg-opacity-20 col-span-6 lg:col-span-2">
            <figure>
              <img src="/projects/form-fields-checker.jpg" alt="Album" />
            </figure>
            <div className="card-body p-4">
              <p>
                NPM package to validate form fields like email, phone, links
                etc. and other stuff
              </p>
              <div className="card-actions mt-3 justify-end items-center">
                <a
                  href="https://github.com/SujoyGhosh-scott/form-fields-checker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="h-10 w-10" src="/social/github.png" />
                </a>
                <a
                  href="https://www.npmjs.com/package/form-fields-checker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="h-8 w-8 mx-2" src="/social/npm2.jpg" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}

export default Packages;
