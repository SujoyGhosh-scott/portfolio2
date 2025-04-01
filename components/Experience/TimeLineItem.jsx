import Link from "next/link";
import React, { useEffect } from "react";

const TimeLineItem = ({
  expandedIndex,
  certificateLink,
  handleExpand,
  index,
  isFirst = false,
  isLast = false,
  duration,
  title,
  logo,
  link,
  type = "JOB", // JOB | EDU
  description,
}) => {
  useEffect(() => {
    console.log({ expandedIndex });
  }, [expandedIndex]);
  return (
    <div className="">
      {isFirst ? null : <div className="h-3 border-l-2 ml-6"></div>}
      <div className={`ml-6 flex ${isLast ? "" : "border-l-2"}`}>
        <div className="flex flex-col relative min-h-[40px]">
          <div
            className={`w-10 h-10 bg-neutral absolute top-0 -left-5 rounded-full flex justify-center items-center overflow-hidden border-[3px] ${
              type === "JOB" ? "border-blue-400" : "border-teal-400"
            }`}
          >
            <Link className="h-3/4" href={link} target="_blank">
              <img className="h-full object-contain" src={logo} alt="" />
            </Link>
          </div>
          <div className="min-w-[40px] h-6 border-b\["></div>
          <div className="min-w-[40px] h-full border-t"></div>
        </div>
        <div
          style={{
            boxShadow: `-5px 5px ${type === "JOB" ? "#007BE5" : "#45a29e"}`,
          }}
          className="flex-1 flex bg-neutral md:max-w-[75%] p-2 px-3 border-[3px] border-gray-400 rounded-sm"
        >
          <div className="flex-1">
            <p className="text-xs">{duration}</p>
            <p>{title}</p>
            {description && expandedIndex === index ? (
              <div className="divider m-0"></div>
            ) : null}
            {description && expandedIndex === index ? (
              <p
                className="text-xs text-gray-400 font-thin pb-2"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            ) : null}
          </div>
          {description ? (
            <>
              {index === expandedIndex ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 h-5"
                  onClick={() => handleExpand(index)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 h-5"
                  onClick={() => handleExpand(index)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </>
          ) : null}
        </div>
      </div>
      {isLast ? null : <div className="h-3 border-l-2 ml-6"></div>}
    </div>
  );
};

export default TimeLineItem;
