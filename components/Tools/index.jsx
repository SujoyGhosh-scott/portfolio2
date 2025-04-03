import React from "react";
import dynamic from "next/dynamic";

// Lazy load ToolsDesktop
const ToolsDesktop = dynamic(() => import("./ToolsDesktop"), { ssr: false });

const Tools = () => {
  return (
    <div
      id="tools"
      className="grid grid-cols-5 grid-rows-7 md:grid-rows-4 pb-6"
    >
      <div className="pt-12 pb-8 pl-8 col-span-5 row-span-1">
        <h1 className="blowbrush text-3xl p-1 bg-gradient-to-b from-[#1f2833] to-[#1f2833] inline">
          Here&apos;s some of the tools I mostly use in
          <br /> my projects
        </h1>
      </div>
      {/* <ToolsMobile /> */}
      <ToolsDesktop />
    </div>
  );
};

export default Tools;
