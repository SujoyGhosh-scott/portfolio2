import Introduction from "../components/Introduction";
import HomeLayout from "../components/Layout/HomeLayout";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col">
        <Introduction />
        <Tools />
        <div id="education" className="h-screen">
          <h1>Education and experiences</h1>
        </div>
        <div id="projects" className="h-screen">
          <h1>Projects</h1>
        </div>
        <div id="contact" className="h-screen">
          <h1>Contact me</h1>
        </div>
      </div>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </HomeLayout>
  );
}