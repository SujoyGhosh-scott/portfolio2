import React from "react";

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/2ad2c504e576b1d74790b5a0d8a3d3e0"
      method="POST"
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
          name="name"
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
          name="email"
          required
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
          name="message"
          required
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
  );
};

export default ContactForm;
