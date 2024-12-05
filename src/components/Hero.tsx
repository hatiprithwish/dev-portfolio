import { motion } from "framer-motion";
import { skills } from "../constants";
import Skills from "./Skills";

const Hero = () => {
  const handleDownload = () => {
    const linkPath = "/resume.pdf";
    const link = document.createElement("a");
    link.href = linkPath;

    link.setAttribute("download", "Prithwish's Resume.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-green-500 opacity-50 rounded-full animate-glow" />
          <img
            src="/portrait.jpg"
            height={100}
            width={100}
            alt="Prithwish's image"
            className="rounded-full mx-auto animate-scale"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl leading-normal font-bold mb-2 gradient-text"
        >
          Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Building impactful applications by day, mastering algorithms at night
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href=""
            onClick={handleDownload}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="mailto:hatiprithwish@gmail.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            hatiprithwish@gmail.com
          </a>
        </motion.div>
      </div>
      <div className="overflow-hidden max-w-[100%] absolute bottom-0">
        <Skills skills={skills} direction="left" speed={30} />
      </div>
    </section>
  );
};

export default Hero;
