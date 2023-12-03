import { testimonialCards } from "@/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section id="testimonials" className="mx-10 lg:mx-28 py-10">
      <h1 className="text-5xl font-bold mb-5">Testimonials</h1>

      <article className="flex justify-between gap-5">
        {testimonialCards.map((card) => (
          <div key={card.id} className="bg-vertical-gradient py-5 px-10 rounded-md flex flex-col items-center mt-5 w-1/2">
            <Image
              src={card.logo}
              width={75}
              height={75}
              alt="company logo"
              className="rounded-full object-contain"
            />
            <h2 className="mt-2 text-xl font-semibold">{card.client}</h2>
            <p className="mt-3 text-center">{card.text}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Testimonial;
