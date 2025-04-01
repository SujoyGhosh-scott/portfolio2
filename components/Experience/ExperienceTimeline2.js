import React, { useState } from "react";
import TimeLineItem from "./TimeLineItem";

const ExperienceTimeline2 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const data = [
    {
      certificateLink: "",
      duration: "Feb, 25 to Present",
      title: "Software Engineer at Indpro",
      logo: "/experience/indpro.png",
      type: "JOB",
      description: "",
      link: "https://indpro.se/",
    },
    {
      certificateLink: "",
      duration: "Jun, 23 to Jan, 25",
      title: "Software Engineer at Wellness Connection",
      logo: "/experience/wc.png",
      type: "JOB",
      description:
        "I have been responsible for leading end-to-end feature development for the company’s core product, the Provider Dashboard, focusing on improving functionality and user experience. I collaborated and delivered complex features like Role Based Access Control, Time and Activity tracking features, Dynamic Question Generation, Authorization, and so on, which have enhanced the overall capabilities of these products. <br /><br />My role also extends across multiple projects, including CMS development and a Clinical Research Web App, where I contributed to both front-end and back-end systems. <br /><br />Additionally, I manage the deployment process by handling server management and designing CI/CD pipelines, ensuring efficient and seamless releases.",
      link: "https://www.wellnessconnection.care/",
    },
    {
      certificateLink: "",
      duration: "Aug, 21 to Jun, 23",
      title: "MSc in CS from St. Xavier's College, Kolkata",
      logo: "/experience/xaviers.png",
      type: "EDU",
      description: "",
      link: "https://www.sxccal.edu/",
    },
    {
      certificateLink: "",
      duration: "Jun, 22 to May, 23",
      title: "Software Engineer Intern at YubiHealth",
      logo: "/experience/yubi-health.png",
      type: "JOB",
      description: "Later became Wellness Connection.",
      link: "https://pitchbook.com/profiles/company/472067-83",
    },
    {
      certificateLink: "",
      duration: "Mar, 22 to Apr, 22",
      title: "Software Engineer Intern at Whales Network",
      logo: "/experience/whales-network.png",
      type: "JOB",
      description:
        "At Whales Network, I worked on a Crypto Trading Mobile application and a video group chat service. In the short period, I learned a lot about mobile app development in the React Native platform, TypeScript, and continued using ReactJs and Material UI to create website interfaces.",
      link: "https://www.linkedin.com/company/whales-network?trk=public_profile_experience-item_profile-section-card_subtitle-click",
    },
    {
      certificateLink: "",
      duration: "Feb, 21 to Dec, 21",
      title: "Software Engineer Intern at Support Genie",
      logo: "/experience/support-genie.png",
      type: "JOB",
      description:
        "I worked on a customer service Dashboard. My responsibilities mostly included creating user interfaces using ReactJs and integrating APIs in the front end. I gained a deeper knowledge of ReactJs, MaterialUI, Amazon Simple Email Service, and client-end GraphQL.",
      link: "https://supportgenie.io/",
    },
    {
      certificateLink: "",
      duration: "Jun, 2018 to Jul, 2021",
      title: "BSc in Computer Science from University of Calcutta",
      logo: "/experience/cu.png",
      type: "EDU",
      description: "",
      link: "https://www.newaliporecollege.ac.in/",
    },
  ];
  const handleExpand = (index) => {
    console.log({ index });
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {data.map((el, i) => (
        <TimeLineItem
          key={i}
          certificateLink={el.certificateLink}
          duration={el.duration}
          index={i}
          logo={el.logo}
          title={el.title}
          description={el.description}
          isFirst={i === 0}
          isLast={i === data.length - 1}
          type={el.type}
          link={el.link}
          handleExpand={handleExpand}
          expandedIndex={expandedIndex}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline2;
