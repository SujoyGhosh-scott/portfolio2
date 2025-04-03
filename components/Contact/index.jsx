import React from "react";
import ContactForm2 from "./ContactForm2";

const ContactMe = () => {
  return (
    <div id="contact" className="min-h-[90vh] grid grid-cols-5 pb-32 md:pb-0">
      <div className="col-span-5 md:col-span-2 p-2 flex flex-col justify-center pl-8">
        <h2 className="blowbrush text-3xl bg-neutral w-fit mb-3">Contact me</h2>
        <p className="w-4/5">
          If you want to reach out to me, regarding any job opportunity,
          personal project or some other query feel free to drop a message in
          the form. I will get back to you. <br />
          You can also drop a message in my social handles.
        </p>
      </div>
      <div className="col-span-5 md:col-span-3 px-10 relative flex justify-center items-center">
        <ContactForm2 />
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
            strokeWidth={3}
            stroke="currentColor"
            className="h-5"
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
