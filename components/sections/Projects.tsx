import { projectCards } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="mx-10 lg:mx-28 py-10">
      <h1 className="text-5xl font-bold">Projects</h1>

      {projectCards.map((card: any) => (
        <article key={card.id}>
          <div className="flex flex-col items-end">
            <div className="text-4xl font-bold">0{card.id}</div>
            <Image
              src="/line.svg"
              width={28}
              height={2}
              alt="line"
              className="object-contain"
            />
          </div>

          <div className="mt-3 mb-7 py-8 px-10 bg-line-gradient flex items-center justify-center rounded-md">
            <div className="w-3/4">
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="mt-2">{card.description}</p>
              <p className="mt-2">
                <strong>Tech Stack: </strong>
                {card.tStack}
              </p>

              <div className="flex gap-3 text-magenta mt-3">
                <Link
                  href={card.domain}
                  className="transition-all underline underline-offset-2 hover:font-bold"
                >
                  Open App
                </Link>
                <span>||</span>
                <Link
                  href={card.github}
                  className="transition-all hover:font-bold underline underline-offset-2"
                >
                  Source Code
                </Link>
              </div>
            </div>

            <Image
              src={card.image}
              width={366}
              height={246}
              alt="project-thumbnail"
              className="object-contain w-1/4"
            />
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
