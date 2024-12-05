import { motion } from "framer-motion";
import { SkillIcon } from "./SkillIcon";

interface InfiniteSkillsScrollProps {
  skills: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function Skills({
  skills = [],
  direction = "left",
  speed = 20,
}: InfiniteSkillsScrollProps) {
  // Duplicate the skills array to ensure smooth infinite scroll
  console.log(skills);
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: direction === "left" ? "-50%" : "50%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex whitespace-nowrap"
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillIcon key={`${skill}-${index}`} name={skill} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
