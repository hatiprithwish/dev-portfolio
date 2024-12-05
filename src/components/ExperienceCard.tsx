import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 py-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-green-200 after:absolute after:-left-2 after:top-6 after:w-4 after:h-4 after:bg-green-500 after:rounded-full"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white p-6 rounded-lg shadow-xl relative border-[1px] border-green-200"
      >
        <div className="flex items-center mb-4">
          <Briefcase className="w-6 h-6 text-green-600 mr-3" />
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-green-600">{company}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-3">{period}</p>
        <p className="text-gray-600">{description}</p>

        <motion.div
          className="absolute -right-2 -bottom-2 w-20 h-20 bg-green-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
