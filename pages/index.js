import ClientProjects from "../components/ClientProjects";
import ContactMe from "../components/Contact";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import HomeLayout from "../components/Layout/HomeLayout";
// import Projects from "../components/Projects";
import Tools from "../components/Tools";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

export default function Home() {
  return (
    <>
      <SEO
        title="Sujoy Ghosh | Full-Stack Web Developer"
        description="Portfolio of Sujoy Ghosh - Full-Stack Web Developer from Kolkata with MSc in Computer Science. Expert in React, Next.js, Node.js, Flutter. Currently Software Engineer at Wellness Connection. View my client projects, certificates, and professional experience."
        keywords="Sujoy Ghosh, Full Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js, JavaScript, Flutter, Portfolio, Kolkata Developer, Software Engineer, Wellness Connection, YubiHealth, Web Development Services"
        url="https://sujoyghosh.netlify.app"
        image="/introImage.jpg"
      />
      <StructuredData />
      <HomeLayout>
        <Introduction />
        <Experience />
        <ClientProjects />
        {/* <Projects /> */}
        <Tools />
        <ContactMe />
        <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
          Made by <span className="text-primary">@sujoy</span>
        </footer>
      </HomeLayout>
    </>
  );
}
