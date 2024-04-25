import { projectCards } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="mx-4 lg:mx-28 py-5 sm:py-10">
      <h1 className="text-xl sm:text-5xl font-bold">Projects</h1>

      {projectCards.map((card: any) => (
        <article key={card.id}>
          <div className="flex flex-col items-end">
            <div className="text-xl sm:text-4xl font-bold">0{card.id}</div>
            <Image
              src="/line.svg"
              width={28}
              height={2}
              alt="line"
              className="object-contain max-sm:w-[20px]"
            />
          </div>

          <div className="mt-3 mb-7 py-4 sm:py-8 px-5 sm:px-10 bg-line-gradient flex flex-wrap-reverse items-center justify-center rounded-md">
            <div className="lg:w-3/4">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <ul className="mt-2 text-xs sm:text-base list-disc ml-4 mr-2">
                {card.bullets?.map((bullet, i) => (
                  <li key={i} className="my-1">
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs sm:text-base">
                <strong>Tech Stack: </strong>
                {card.tStack}
              </p>

              <div className="flex gap-1 sm:gap-3 text-magenta mt-4">
                <Link
                  target="_blank"
                  href={card.domain}
                  className="transition-all underline underline-offset-2 hover:font-bold text-xs sm:text-base"
                >
                  Open App
                </Link>
                <span className="text-xs sm:text-base">||</span>
                <Link
                  target="_blank"
                  href={card.github}
                  className="transition-all hover:font-bold underline underline-offset-2 text-sm sm:text-base"
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
              className="object-contain lg:w-1/4"
            />
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
