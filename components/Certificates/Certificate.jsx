import React from "react";

const Certificate = ({
  certificate = "/certificates/cicd.png",
  from = "/certificates/codedamn.png",
  title = "CI/CD with GitHub Actions",
  setSelectedImage,
  setProvider,
  setSelectedTitle,
}) => {
  return (
    <>
      <label
        onClick={() => {
          setSelectedImage(certificate);
          setProvider(from);
          setSelectedTitle(title);
        }}
        htmlFor="my-modal-3"
        className="mb-2 hover:cursor-pointer"
      >
        <img style={{ boxShadow: "-5px 5px #45a29e" }} src={certificate} />
      </label>
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
