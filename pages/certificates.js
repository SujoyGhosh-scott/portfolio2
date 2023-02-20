import Link from "next/link";
import React, { useState } from "react";
import ColWith1Cert from "../components/Certificates/ColWith1Cert";
import ColWith2Cert from "../components/Certificates/ColWith2Cert";
import ColWith3Cert from "../components/Certificates/ColWith3Cert";
import Head from "next/head";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [provider, setProvider] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  return (
    <div>
      <Head>
        <title>certificates | Sujoy Ghosh</title>
        <meta
          name="description"
          content="all the certificates of Sujoy Ghosh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          Here&apos;s all of my certificates I&apos;ve earned in the past years
        </h1>
        <main className="min-h-[80vh] grid grid-cols-2 md:grid-cols-7 px-4 -skew-x-0 md:-skew-x-12">
          <div className="col-span-1 hidden md:block" />
          <ColWith1Cert
            certificate="/certificates/three.png"
            from="/certificates/udemy.webp"
            title="Three.js tutorial"
            setSelectedImage={setSelectedImage}
            setProvider={setProvider}
            setSelectedTitle={setSelectedTitle}
          />
          <ColWith2Cert
            certificate1="/certificates/flutter.png"
            certificate2="/certificates/8051.png"
            from1="/certificates/udemy.webp"
            from2="/certificates/udemy.webp"
            title1="Embeded Systems using 8051 Microcontroller"
            title2="Learn Flutter and Dart to create Android apps"
            setSelectedImage={setSelectedImage}
            setProvider={setProvider}
            setSelectedTitle={setSelectedTitle}
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
            setSelectedImage={setSelectedImage}
            setProvider={setProvider}
            setSelectedTitle={setSelectedTitle}
          />
          <ColWith2Cert
            certificate1="/certificates/flutter.png"
            certificate2="/certificates/hosting.png"
            from1="/certificates/udemy.webp"
            from2="/certificates/udemy.webp"
            title1="Embeded Systems using 8051 Microcontroller"
            title2="Introduction to Domain Name &amp; Web Hosting"
            setSelectedImage={setSelectedImage}
            setProvider={setProvider}
            setSelectedTitle={setSelectedTitle}
          />
          <ColWith1Cert
            setSelectedImage={setSelectedImage}
            setProvider={setProvider}
            setSelectedTitle={setSelectedTitle}
          />
          <div className="col-span-1 hidden md:block" />
        </main>
      </main>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center mb-6">
            <img
              src={provider}
              className="h-8 w-8 mr-4 object-contain rounded-full"
              alt=""
            />
            <p className="font-semibold">{selectedTitle}</p>
          </div>
          <img src={selectedImage} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
