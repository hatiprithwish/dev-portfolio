"use client";

import Image from "next/image";
import TechStack from "../TechStack";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="mx-4 lg:px-28 flex items-center justify-between relative max-h-[850px] overflow-hidden">
      <div>
        <h2 className="text-xs mt-4 sm:text-xl lg:text-4xl lg:mt-0 font-extralight">
          Hi, Hati Here! I'm a
        </h2>
        <h1 className="text-lg sm:text-4xl lg:text-8xl font-black uppercase">
          FrontEnd
          <br />
          Developer
        </h1>
        <h3 className="text-xs lg:text-lg my-2 sm:my-5 font-light max-w-md">
          A passionate self-taught web developer from Kolkata. I have experience
          in <TechStack />
        </h3>
        <button
          type="button"
          onClick={() => {
            router.push("#contact");
          }}
          className="bg-skyblue text-white text-xs lg:text-xl px-[4%] py-[2%] font-semibold rounded-[3px] lg:rounded-md hover:bg-magenta transition-all md:uppercase mb-4 lg:mb-0"
        >
          Contact Me
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
