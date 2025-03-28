import React, { useState } from "react";

const projects = [
  {
    name: "Art & Beyond",
    type: "Portfolio",
    description:
      "A website for photographers to showcase their work through online exhibitions, sell their work, and share their stories via a blogging system. Includes a custom admin panel for content control.",
    tags: ["ReactJs", "Tailwind", "NodeJs", "MySQL", "VPS"],
  },
  {
    name: "Billing System for a Jewellery Shop",
    type: "Business Management",
    description:
      "A billing, payment, custom order management, and inventory management system for a jewelry shop in Kolkata.",
    tags: ["ReactJs", "Tailwind", "NodeJs", "MongoDB"],
  },
  {
    name: "BestKorsBuddy",
    type: "Review Platform",
    description:
      "A platform for users to explore reviews of courses and books recommended by popular YouTubers.",
    tags: ["NextJs", "Tailwind", "Sanity"],
  },
  {
    name: "Creative Nuances",
    type: "E-Commerce",
    description:
      "A clothing e-commerce store with a payment gateway, courier service integration, and an admin panel for managing products, orders, and site content.",
    tags: ["NextJs", "Tailwind", "Strapi", "MySQL", "Docker", "Digital Ocean"],
  },
  {
    name: "Micro Niche Website",
    type: "Blog",
    description:
      "A fully dynamic blogging site where every component is customizable, allowing the same codebase to power multiple sites, all managed from a single WordPress admin panel.",
    tags: ["NextJs", "TailwindCSS", "MySQL", "WordPress"],
  },
  {
    name: "Phenix Labs",
    type: "Company Landing",
    description:
      "Company website for an IoT-based company to showcase projects and offer IoT courses via a sub-brand website.",
    tags: ["NextJs", "Tailwind", "Sanity"],
  },
  {
    name: "World Harvest Prayer House",
    type: "Non-Profit",
    description:
      "A website for a charitable foundation to showcase their work, provide communication channels, and accept donations.",
    tags: ["NextJs", "Tailwind"],
  },
  {
    name: "College Annual Fest Websites",
    type: "Event Management",
    description:
      "Websites developed for various college fests, managing registrations, payments, chat functionality, event history, and more.",
    tags: ["NextJs", "Tailwind"],
  },
];

const ClientProjects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div id="client-projects" className="px-6">
      <div className="mb-6">
        <h1 className="blowbrush text-3xl font-normal bg-neutral w-fit mt-6">
          Client Projects
        </h1>
        <p className="mt-1">
          Websites and platforms I developed for clients, tailored to their
          specific needs and industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
          const shortDescription =
            project.description.split(" ").slice(0, 20).join(" ") + "...";
          const shouldShowReadMore =
            project.description.length > shortDescription.length;

          return (
            <div key={index} className="flex flex-col gap-2">
              {/* Placeholder Image */}
              <div className="bg-gray-300 w-full h-36 rounded-sm"></div>

              {/* Site Type */}
              <p className="text-xs text-gray-500">{project.type}</p>

              {/* Project Title */}
              <h2 className="text-lg font-semibold blowbrush">
                {project.name}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-1">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 px-2 py-0.5 rounded-sm bg-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <p className="text-sm text-gray-500">
                {isExpanded ? project.description : shortDescription}
                {shouldShowReadMore && (
                  <span
                    className="text-xs text-blue-500 cursor-pointer ml-1"
                    onClick={() => toggleReadMore(index)}
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientProjects;
