import { Project, projects } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <section id="projects" className="mt-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl leading-normal font-bold mb-12 text-center gradient-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <a
                  className="w-full relative"
                  href={project.link}
                  target="_blank"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 uppercase text-red-600 font-bold bg-slate-50 rounded-lg py-1 px-2 cursor-pointer flex gap-2 items-center">
                    live
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                  </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="relative">
                      <a href={project.github} target="_blank">
                        <img
                          src="/skills/github.svg"
                          width={25}
                          height={25}
                          alt="github icon"
                          className="hover:scale-110"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-wrap text-xs">
                    {project.technologies?.map((tech, i) => (
                      <p key={i} className="text-gray-500 flex gap-1">
                        <span>{tech}</span>
                        {i < project.technologies.length - 1 && <span>|</span>}
                      </p>
                    ))}
                  </div>
                  <ul className="list-disc ml-4 mt-2 space-y-2">
                    {project.bullets?.map((bullet) => (
                      <li
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{ __html: bullet }}
                      />
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
