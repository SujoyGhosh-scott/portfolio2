import Certificate from "./Certificate";

const ColWith1Cert = ({
  certificate,
  from,
  title,
  setSelectedImage,
  setProvider,
  setSelectedTitle,
}) => {
  return (
    <div className="col-span-1 flex flex-col justify-center px-2">
      <Certificate
        certificate={certificate}
        from={from}
        title={title}
        setSelectedImage={setSelectedImage}
        setProvider={setProvider}
        setSelectedTitle={setSelectedTitle}
      />
    </div>
  );
};

export default ColWith1Cert;
