import Certificate from "./Certificate";

const ColWith2Cert = ({
  certificate1,
  from1,
  title1,
  certificate2,
  from2,
  title2,
  setSelectedImage,
  setProvider,
  setSelectedTitle,
}) => {
  return (
    <div className="col-span-1 flex flex-col justify-center px-2">
      <Certificate
        certificate={certificate1}
        from={from1}
        title={title1}
        setSelectedImage={setSelectedImage}
        setProvider={setProvider}
        setSelectedTitle={setSelectedTitle}
      />
      <Certificate
        certificate={certificate2}
        from={from2}
        title={title2}
        setSelectedImage={setSelectedImage}
        setProvider={setProvider}
        setSelectedTitle={setSelectedTitle}
      />
    </div>
  );
};

export default ColWith2Cert;
