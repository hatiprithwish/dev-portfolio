import { motion } from "framer-motion";

export function SkillIcon({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 min-w-[120px] hover:scale-110 transition-transform duration-100"
      transition={{
        type: "linear",
      }}
      key={index}
    >
      <div className="bg-slate-100 backdrop-blur-sm rounded-xl p-4 mb-2 hover:bg-slate-200 transition-colors">
        <img
          src={`/skills/${name.toLowerCase().split(" ").join("-")}.svg`}
          width={50}
          height={50}
          alt={`${name} icon`}
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium text-black">{name}</span>
    </motion.div>
  );
}
