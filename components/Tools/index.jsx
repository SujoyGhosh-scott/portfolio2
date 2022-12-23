import React from "react";

const Tools = () => {
  return (
    <div
      id="tools"
      className="min-h-screen grid grid-cols-5 grid-rows-7 md:grid-rows-4 pb-6"
    >
      <div className="pt-12 pb-8 pl-8 col-span-5 row-span-1">
        <h1 className="blowbrush text-3xl p-1 bg-gradient-to-b from-[#1f2833] to-[#1f2833] inline">
          Here&apos;s some of the tools I mostly use in
          <br /> my projects
        </h1>
      </div>
      <div className="col-span-5 md:col-span-3 row-span-3 pl-8 pr-4 flex flex-col justify-around">
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative flex flex-wrap items-center mb-6"
        >
          <img
            className="h-8 mr-1 object-contain"
            src="/skills/html.png"
            alt=""
          />
          <img
            className="h-8 mr-1 object-contain"
            src="/skills/css.png"
            alt=""
          />
          <img
            className="h-10 mr-3 object-contain"
            src="/skills/js.svg"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/typescript.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/nextjs.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/tailwind.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/material-ui.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/bootstrap.png"
            alt=""
          />
          <img
            className="h-8 mt-4 md:mt-0 object-contain"
            src="/skills/styled-components.png"
            alt=""
          />
          <span className="bg-accent text-base-100 px-2 py-1 text-xs font-semibold absolute bottom-0 right-0">
            Frontend
          </span>
        </div>
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative flex flex-wrap items-center mb-6"
        >
          <img
            className="h-12 mr-3 object-contain"
            src="/skills/nodejs.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/express.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/graphql.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/mongodb.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/mysql.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/heroku.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/netlify.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/vercel.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/quicksight.png"
            alt=""
          />
          <img
            className="h-10 mt-4 md:mt-0 mr-4 object-contain"
            src="/skills/ses.png"
            alt=""
          />
          <span className="bg-accent text-base-100 px-2 py-1 text-xs font-semibold absolute bottom-0 right-0">
            Backend
            <br />
            &amp; Cloud
          </span>
        </div>
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative flex items-center flex-wrap"
        >
          <img
            className="h-8 mr-4 object-contain"
            src="/skills/figma.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/canva.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/wordpress.png"
            alt=""
          />
          <img
            className="h-10 mr-4 object-contain"
            src="/skills/python.png"
            alt=""
          />
          <img className="h-8 mr-4 object-contain" src="/skills/c.png" alt="" />
          <span className="bg-accent text-base-100 px-2 py-1 text-xs font-semibold absolute bottom-0 right-0">
            Other
          </span>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 row-span-3 pt-8 md:pt-0 pl-6 pr-6 md:pl-4 md:pr-8">
        <div className="mb-4">
          <img
            className="w-full object-contain"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=SujoyGhosh-scott&layout=compact&theme=github_dark"
            alt="Sujoy Ghosh's most used programming languages"
          />
        </div>
        <div>
          <img className="w-full object-contain" src="/calender.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
