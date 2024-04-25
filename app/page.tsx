import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full">
      <Hero />
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
    </main>
  );
}
