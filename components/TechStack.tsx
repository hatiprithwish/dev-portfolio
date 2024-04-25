"use client";

import { useEffect, useState } from "react";

const technologies = [
  "JavaScript",
  "React",
  "Redux Toolkit",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Firebase",
  "Framer Motion",
  "Swiper JS",
];

const TechStack = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index, resetting to 0 if it reaches the end
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 700);

    return () => clearInterval(interval);
  }, [technologies.length]); // Depends on length to re-run effect when texts change

  return (
    <span className="font-bold lg:text-magenta">
      {technologies[currentTextIndex]}
    </span>
  );
};

export default TechStack;
