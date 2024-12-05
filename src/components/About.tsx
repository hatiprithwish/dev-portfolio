import { AnimatedSection } from "./AnimatedSection";

const About = () => {
  return (
    <AnimatedSection className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4" id="about">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
          About Me
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I'm a passionate self-taught developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend development, I create seamless, user-centric experiences that
          solve real-world problems.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default About;
