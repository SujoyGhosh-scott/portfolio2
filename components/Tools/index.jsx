import React from "react";

const Tools = () => {
  return (
    <div
      id="tools"
      className="min-h-screen grid grid-cols-5 grid-rows-7 md:grid-rows-4 pb-6"
    >
      <div className="pt-12 pb-8 pl-8 col-span-5 row-span-1">
        <h1 className="text-3xl font-semibold p-1 bg-gradient-to-b from-[#1f2833] to-[#1f2833] inline">
          Here&apos;s some of the tools I mostly use in
          <br /> my projects
        </h1>
      </div>
      <div className="col-span-5 md:col-span-3 row-span-3 pl-8 pr-4 flex flex-col justify-between">
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative"
        >
          hello
          <span className="bg-accent text-base-100 px-2 py-1 text-xs font-semibold absolute bottom-0 right-0">
            Frontend
          </span>
        </div>
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative"
        >
          hello
          <span className="bg-accent text-base-100 px-2 py-1 text-xs font-semibold absolute bottom-0 right-0">
            Backend
            <br />
            &amp; Cloud
          </span>
        </div>
        <div
          style={{ boxShadow: "-5px 5px #45a29e" }}
          className="border-2 bg-neutral border-accent p-4 relative"
        >
          hello
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
        <div>most used languages 3d chart</div>
      </div>
    </div>
  );
};

export default Tools;
