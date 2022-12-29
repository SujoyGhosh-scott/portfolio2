import Certificate from "./Certificate";

const ColWith3Cert = ({
  certificate1,
  from1,
  title1,
  certificate2,
  from2,
  title2,
  certificate3,
  from3,
  title3,
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
      <Certificate
        certificate={certificate3}
        from={from3}
        title={title3}
        setSelectedImage={setSelectedImage}
        setProvider={setProvider}
        setSelectedTitle={setSelectedTitle}
      />
    </div>
  );
};

export default ColWith3Cert;
