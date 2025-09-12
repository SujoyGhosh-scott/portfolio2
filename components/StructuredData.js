import Head from "next/head";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sujoy Ghosh",
    alternateName: ["sujoy", "@sujoy"],
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer with expertise in React, Next.js, Node.js, and Flutter. Currently working as Software Engineer at Wellness Connection.",
    url: "https://sujoyghosh.netlify.app",
    image: "https://sujoyghosh.netlify.app/introImage.jpg",
    sameAs: [
      "https://github.com/SujoyGhosh-scott",
      "https://www.linkedin.com/in/sujoy-ghosh2000/",
      "https://www.npmjs.com/~sujoyghosh",
      "https://leetcode.com/u/ghoshsujoy336/",
      "https://www.hackerrank.com/profile/Sujoy_Ghosh",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "India",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "St. Xavier's College, Kolkata",
        url: "https://www.sxccal.edu/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Calcutta",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Wellness Connection",
      url: "https://www.wellnessconnection.care/",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Kolkata",
      },
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Flutter",
        "Dart",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "MongoDB",
        "MySQL",
        "GraphQL",
        "Docker",
        "CI/CD",
        "Web Development",
        "Mobile App Development",
        "Full-Stack Development",
      ],
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "React Development",
      "Next.js Development",
      "Node.js Development",
      "Flutter Development",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "DevOps",
      "Software Engineering",
    ],
    award: [
      "Frontend Development Libraries Certificate - FreeCodeCamp",
      "JavaScript Algorithms & Data Structures Certificate - FreeCodeCamp",
      "Flutter Development Certificate - Udemy",
      "CI/CD with GitHub Actions Certificate - Codedamn",
      "Embedded Systems using 8051 Microcontroller Certificate - Udemy",
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sujoy Ghosh Portfolio",
    url: "https://sujoyghosh.dev",
    description: "Portfolio website of Sujoy Ghosh - Full-Stack Web Developer",
    author: {
      "@type": "Person",
      name: "Sujoy Ghosh",
    },
    inLanguage: "en-US",
    copyrightHolder: {
      "@type": "Person",
      name: "Sujoy Ghosh",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sujoyghosh.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </Head>
  );
};

export default StructuredData;
