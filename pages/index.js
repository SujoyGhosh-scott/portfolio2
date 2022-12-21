import Introduction from "../components/Introduction";
import HomeLayout from "../components/Layout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <Introduction />
      <div id="tools" className="h-screen">
        <h1>Languages and tools</h1>
      </div>
      <div id="education" className="h-screen">
        <h1>Education and experiences</h1>
      </div>
      <div id="projects" className="h-screen">
        <h1>Projects</h1>
      </div>
      <div id="contact" className="h-screen">
        <h1>Contact me</h1>
      </div>
      <footer className="border-t border-gray-100 border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </HomeLayout>
  );
}
