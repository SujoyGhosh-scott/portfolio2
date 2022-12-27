import Link from "next/link";
import React from "react";
import Certificate from "../components/Certificates/Certificate";

const ColWith1Cert = ({ certificate, from, title }) => {
  return (
    <div className="col-span-1 flex flex-col justify-center px-2">
      <Certificate certificate={certificate} from={from} title={title} />
    </div>
  );
};

const ColWith2Cert = ({
  certificate1,
  from1,
  title1,
  certificate2,
  from2,
  title2,
}) => {
  return (
    <div className="col-span-1 flex flex-col justify-center px-2">
      <Certificate certificate={certificate1} from={from1} title={title1} />
      <Certificate certificate={certificate2} from={from2} title={title2} />
    </div>
  );
};

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
}) => {
  return (
    <div className="col-span-1 flex flex-col justify-center px-2">
      <Certificate certificate={certificate1} from={from1} title={title1} />
      <Certificate certificate={certificate2} from={from2} title={title2} />
      <Certificate certificate={certificate3} from={from3} title={title3} />
    </div>
  );
};

const Certificates = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <Link href="/">
          <button className="btn btn-ghost normal-case text-2xl font-extralight blowbrush">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Home
          </button>
        </Link>
      </div>
      <main className="px-0 md:px-24">
        <h1 className="text-2xl blowbrush text-center my-10 px-6">
          Here&amp;s all of my certificates I&amp;ve earned in the past years
        </h1>
        <main className="min-h-[80vh] grid grid-cols-2 md:grid-cols-7 px-4 -skew-x-0 md:-skew-x-12">
          <div className="col-span-1 hidden md:block" />
          <ColWith1Cert
            certificate="/certificates/digital-marketing.jpg"
            from="/certificates/google.png"
            title="Fundamentals of Digital Marketing"
          />
          <ColWith2Cert
            certificate1="/certificates/flutter.png"
            certificate2="/certificates/8051.png"
            from1="/certificates/udemy.webp"
            from2="/certificates/udemy.webp"
            title1="Embeded Systems using 8051 Microcontroller"
            title2="Learn Flutter and Dart to create Android apps"
          />
          <ColWith3Cert
            certificate1="/certificates/algo-ds.png"
            title1="Javascript Algorithm &amp; Data Structures"
            from1="/certificates/freecodecamp.png"
            certificate2="/certificates/frontend.png"
            title2="Frontend Development Libraries"
            from2="/certificates/freecodecamp.png"
            certificate3="/certificates/resp.png"
            title3="Responsive Web Design"
            from3="/certificates/freecodecamp.png"
          />
          <ColWith2Cert
            certificate1="/certificates/flutter.png"
            certificate2="/certificates/8051.png"
            from1="/certificates/udemy.webp"
            from2="/certificates/udemy.webp"
            title1="Embeded Systems using 8051 Microcontroller"
            title2="Learn Flutter and Dart to create Android apps"
          />
          <ColWith1Cert />
          <div className="col-span-1 hidden md:block" />
        </main>
      </main>
    </div>
  );
};

export default Certificates;
