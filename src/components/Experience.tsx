import { experiences } from "../constants";
import { ExperienceCard } from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Experience
        </h2>
        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
