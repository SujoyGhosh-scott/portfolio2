const ProjectCard = ({ bg, title, description, github, live }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="col-span-2 md:col-span-1 h-96 bg-cover bg-center relative"
    >
      <div className="h-full w-full absolute bg-white bg-opacity-0 hover:bg-opacity-50 px-12 py-16">
        <div className="h-full w-full opacity-0 hover:opacity-90">
          {/* <div className="h-full w-full hidden hover:block"> */}
          <p className="text-2xl font-semibold bg-neutral w-fit max-w-[4/5] text-primary blowbrush">
            This is the project title
          </p>
          <p className="max-w-[100%] md:max-w-[75%] my-6 md:my-8 text-base-100 font-normal">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex">
            <div className="flex flex-col">
              <a
                href="#"
                target="_blank"
                className="btn btn-primary rounded-none normal-case text-base-100 border border-base-100"
              >
                GitHub
                <img
                  src="/projects/github.png"
                  className="h-4 w-4 ml-4"
                  alt=""
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="btn btn-info rounded-none normal-case text-base-100 border-base-100 border-t-0"
              >
                Live
                <img
                  src="/projects/openlink.png"
                  className="h-4 w-4 ml-4"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
