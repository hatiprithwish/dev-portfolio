import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />

      <Hero />

      <Projects />

      <Experience />

      {/* <About /> */}

      <Contact />
    </div>
  );
}

export default App;
