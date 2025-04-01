import React from "react";

const ContactForm2 = () => {
  return (
    <form
      action="https://formsubmit.co/2ad2c504e576b1d74790b5a0d8a3d3e0"
      method="POST"
      className="border-4 border-[#007BE5] rounded-sm p-6 pt-4 bg-neutral w-72 mt-8 md:mt-0"
      style={{ boxShadow: "-8px 8px #45a29e" }}
    >
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text-alt">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full rounded-sm input-md"
          name="name"
          required
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text-alt">Email</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          className="input input-bordered w-full rounded-sm input-md"
          name="email"
          required
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text-alt">For</span>
        </label>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-between pl-1">
            <span className="text-xs">Query</span>
            <input
              type="radio"
              name="radio-10"
              className="radio radio-primary radio-xs"
              defaultChecked
            />
          </div>
          <div className="flex items-center justify-between pl-3">
            <span className="text-xs">Feedback</span>
            <input
              type="radio"
              name="radio-10"
              className="radio radio-primary radio-xs"
            />
          </div>
          <div className="flex items-center justify-between pl-1 mt-2">
            <span className="text-xs">Project Quotation</span>
            <input
              type="radio"
              name="radio-10"
              className="radio radio-primary radio-xs"
            />
          </div>
        </div>
      </div>

      <div className="form-control w-full max-w-xs mt-2">
        <label className="label">
          <span className="label-text-alt">Message</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24 rounded-sm"
          placeholder="Type here"
          name="message"
          required
        ></textarea>
      </div>

      <button className="btn bg-[#007BE5] rounded-sm mt-6 w-full">
        Submit
      </button>
    </form>
  );
};

export default ContactForm2;
