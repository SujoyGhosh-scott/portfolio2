import ClientProjects from "../components/ClientProjects";
import ContactMe from "../components/Contact";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import HomeLayout from "../components/Layout/HomeLayout";
import Projects from "../components/Projects";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <HomeLayout>
      <Introduction />
      <Tools />
      <Experience />
      {/* <ClientProjects /> */}
      <Projects />
      <ContactMe />
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </HomeLayout>
  );
}
