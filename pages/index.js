import ContactMe from "../components/Contact";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import HomeLayout from "../components/Layout/HomeLayout";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col">
        <Introduction />
        <Tools />
        <Experience />
        <div id="projects" className="h-screen">
          <h1>Projects</h1>
        </div>
        <ContactMe />
      </div>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </HomeLayout>
  );
}
