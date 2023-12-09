import { testimonialCards } from "@/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section id="testimonials" className="mx-10 lg:mx-28 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold sm:mb-5">Testimonials</h1>

      <article className="grid md:grid-cols-2 xl:grid-cols-3 justify-between gap-x-5 gap-y-2 max-lg:flex-wrap">
        {testimonialCards.map((card) => (
          <div key={card.id} className="bg-vertical-gradient py-5 px-5 sm:px-10 rounded-md flex flex-col items-center mt-5">
            <Image
              src={card.logo}
              width={75}
              height={75}
              alt="company logo"
              className="rounded-full object-contain"
            />
            <h2 className="mt-2 text-xl font-semibold">{card.client}</h2>
            <p className="mt-3 text-center text-sm sm:text-base">{card.text}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Testimonial;
