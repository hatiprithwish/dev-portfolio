"use client";

import Image from "next/image";
import TechStack from "../TechStack";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="mx-10 lg:mx-28 flex items-center justify-between relative max-h-[850px] overflow-hidden">
      <div>
<<<<<<< HEAD
        <h2 className="text-4xl font-extralight">Hi, Hati Here! I'm a</h2>
        <h1 className="text-8xl font-black uppercase">
          FrontEnd
=======
        <h2 className="text-sm sm:text-base md:text-xl font-extralight mt-3">
          Hi, Hati Here! I'm a
        </h2>
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
          FULL STACK
>>>>>>> 80893b76c1b6f335c1662c9ed57264a2003788e0
          <br />
          Developer
        </h1>
<<<<<<< HEAD
        <h3 className="text-lg my-5 font-light max-w-md">
          A passionate self-taught web developer from Kolkata. I have experience
          in <TechStack />
        </h3>
        <button
          type="button"
          onClick={() => {
            router.push("#contact");
          }}
          className="bg-magenta text-white text-xl p-3 font-semibold rounded-md hover:bg-skyblue transition-all"
=======
        <h3 className="text-xs sm:text-base md:text-xl xl:text-2xl my-4 sm:my-5 font-light">
          Crafting Seamless Full Stack <br className="max-sm:hidden" />
          Web Experiences in Next.js 14 & React.js
        </h3>
        <button
          type="button"
          className="bg-magenta text-white text-xs md:text-xl p-2 md:p-3 font-semibold rounded-md hover:bg-skyblue transition-all"
>>>>>>> 80893b76c1b6f335c1662c9ed57264a2003788e0
        >
          CONTACT ME
        </button>
      </div>

      <div className="self-end">
        <Image
          src="/hero-img.svg"
          priority
          height={827}
          width={553}
          alt="hero image"
          className="object-contain md:h-[90vh]"
        />
      </div>

      <Image
        src="/hero-bg.svg"
        height={830}
        width={830}
        alt="background image"
        className="absolute top-0 right-0 object-contain -z-10 md:h-[90vh]"
      />
    </section>
  );
};

export default Hero;
