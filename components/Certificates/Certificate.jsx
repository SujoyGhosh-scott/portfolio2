import React from "react";

const Certificate = ({
  certificate = "/certificates/cicd.png",
  from = "/certificates/codedamn.png",
  title = "CI/CD with GitHub Actions",
}) => {
  return (
    <>
      <img
        style={{ boxShadow: "-5px 5px #45a29e" }}
        src={certificate}
        className="mb-2"
      />
      <div className="flex items-center mb-6 skew-x-0 md:skew-x-12">
        <img
          src={from}
          className="h-8 w-8 mr-2 object-contain rounded-full"
          alt=""
        />
        <p className="text-sm">{title}</p>
      </div>
    </>
  );
};

export default Certificate;
