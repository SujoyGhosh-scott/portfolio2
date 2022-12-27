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
      <div className="col-span-5 md:col-span-3 row-span-3 pl-8 pr-4 flex flex-col justify-evenly">
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative flex flex-wrap items-center mb-6"
        >
          <div className="tooltip" data-tip="HTML5">
            <img
              className="h-10 md:h-16 mr-1 object-contain"
              src="/skills/html.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="CSS3">
            <img
              className="h-10 md:h-16 mr-1 object-contain"
              src="/skills/css.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="JavaScript">
            <img
              className="h-10 md:h-16 mr-3 object-contain"
              src="/skills/js.svg"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="TypeScript">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/typescript.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="ReactJs">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/reactjs.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Next.js">
            <img
              className="h-8 md:h-14 mr-4 object-contain"
              src="/skills/nextjs.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Tailwind">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/tailwind.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Material UI">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/material-ui.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Bootstrap">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/bootstrap.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Styled Components">
            <img
              className="h-8 md:h-14 mt-4 md:mt-0 object-contain"
              src="/skills/styled-components.png"
              alt=""
            />
          </div>
          <span className="bg-accent text-base-100 px-2 py-1 text-xs font-semibold absolute bottom-0 right-0">
            Frontend
          </span>
        </div>
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative flex flex-wrap items-center mb-6"
        >
          <div className="tooltip" data-tip="Node.js">
            <img
              className="h-12 md:h-18 mr-3 object-contain"
              src="/skills/nodejs.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Express">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/express.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="GraphQL">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/graphql.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="MongoDB">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/mongodb.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="MySQL">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/mysql.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Heroku">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/heroku.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Netlify">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/netlify.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Vercel">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/vercel.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="AWS Quicksight">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/quicksight.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="AWS Simple Email Service">
            <img
              className="h-10 md:h-16 mt-4 md:mt-0 mr-4 object-contain"
              src="/skills/ses.png"
              alt=""
            />
          </div>
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
          <div className="tooltip" data-tip="Figma">
            <img
              className="h-8 md:h-14 mr-4 object-contain"
              src="/skills/figma.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Canva">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/canva.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="WordPress">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/wordpress.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="Python">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/python.png"
              alt=""
            />
          </div>
          <div className="tooltip" data-tip="C programming">
            <img
              className="h-10 md:h-16 mr-4 object-contain"
              src="/skills/c.png"
              alt=""
            />
          </div>
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
