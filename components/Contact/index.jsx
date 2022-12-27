import React from "react";

const ContactMe = () => {
  return (
    <div id="contact" className="min-h-[90vh] grid grid-cols-5">
      <div className="col-span-5 md:col-span-2 p-2 flex flex-col justify-center pl-8">
        <h2 className="blowbrush text-3xl bg-neutral w-fit mb-3">Contact me</h2>
        <p className="w-4/5">
          If you want to reach out to me, regarding any job opportunity,
          personal project or some other query feel free to drop a message in
          the form. I will get back to you. <br />
          You can also drop a message in my social handles.
        </p>
      </div>
      <div className="col-span-5 md:col-span-3 p-2 relative flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("contact form submitted");
          }}
        >
          <div
            style={{ boxShadow: "-6px 6px #45a29e" }}
            className="form-control border-2 border-black bg-neutral p-5 w-full max-w-xs mb-20 md:mb-0"
          >
            <label className="label">
              <span className="label-text text-xs">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered input-sm input-accent w-full rounded-none bg-neutral-focus"
            />
            {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
            <label className="label mt-2">
              <span className="label-text text-xs">Email *</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered input-sm input-accent w-full rounded-none bg-neutral-focus"
            />
            {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
            <label className="label mt-2">
              <span className="label-text text-xs">Message *</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter message"
              className="textarea textarea-accent w-full rounded-none bg-neutral-focus"
            />
            {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
            <button
              className="normal-case btn btn-accent rounded-none border border-black mt-6 btn-sm hover:scale-105 text-base-100 mb-4"
              style={{ boxShadow: "-3px 3px #66fcf1" }}
            >
              Submit
            </button>
          </div>
        </form>
        <a
          href="#intro"
          className="btn btn-primary btn-md normal-case rounded-full absolute bottom-2 right-4 group/edit group/item ease-in-out duration-100"
        >
          <span className="group-hover/edit:translate-x-0.5 group-hover/edit:block hidden mr-3">
            Back to top
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
