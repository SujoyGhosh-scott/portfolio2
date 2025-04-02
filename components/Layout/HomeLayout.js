import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ClientsIcon, ContactIcon, JobIcon, ToolsIcon } from "../icons";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "education", label: "Education, experiences and courses" },
  { id: "client-projects", label: "Client Projects" },
  { id: "tools", label: "Languages and tools" },
  { id: "contact", label: "Contact me" },
];

const MobileDockIcon = ({ Icon, text, link, isActive }) => {
  return (
    <a href={link}>
      <div className="flex flex-col justify-center">
        <Icon
          givenClass={`h-6 ${isActive ? "text-primary" : "text-gray-400"}`}
        />
        <p
          className={`text-xs mt-2 ${
            isActive ? "text-primary font-bold" : "text-gray-400"
          }`}
        >
          {text}
        </p>
      </div>
    </a>
  );
};

const HomeLayout = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Sujoy Ghosh | Web Developer</title>
        <meta
          name="description"
          content="Portfolio website of Sujoy Ghosh, Full-stack web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* desktop sidebar */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side py-6 w-[50vw] md:w-[15vw]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-2 bg-base-100 text-base-content ml-0 md:ml-10 border-l border-opacity-40 border-gray-600">
            {sections.map((section) => (
              <li key={section.id} className="text-sm">
                <a
                  href={`#${section.id}`}
                  className={`${
                    activeSection === section.id
                      ? "font-bold text-primary bg-neutral"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    document.getElementById("my-drawer-2").click();
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* drawer mobile dock */}
      <div className="py-2 pt-3 fixed bottom-0 w-full bg-[#1F2833] flex md:hidden justify-around">
        <MobileDockIcon
          Icon={JobIcon}
          text="Experience"
          link="#education"
          isActive={activeSection === "education"}
        />
        <MobileDockIcon
          Icon={ClientsIcon}
          text="Clients"
          link="#client-projects"
          isActive={activeSection === "client-projects"}
        />
        <MobileDockIcon
          Icon={ToolsIcon}
          text="Tools"
          link="#tools"
          isActive={activeSection === "tools"}
        />
        <MobileDockIcon
          Icon={ContactIcon}
          text="Contact"
          link="#contact"
          isActive={activeSection === "contact"}
        />
      </div>
    </div>
  );
};

export default HomeLayout;
