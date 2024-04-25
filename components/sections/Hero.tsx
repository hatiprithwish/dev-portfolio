"use client";

import Image from "next/image";
import TechStack from "../TechStack";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="mx-10 lg:mx-28 flex items-center justify-between relative">
      <div>
        <h2 className="text-4xl font-extralight">Hi, Hati Here! I'm a</h2>
        <h1 className="text-8xl font-black uppercase">
          FrontEnd
          <br />
          Developer
        </h1>
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
        >
          CONTACT ME
        </button>
      </div>

      <Image
        src="/hero-img.svg"
        height={827}
        width={553}
        alt="hero image"
        className="object-contain h-[90vh]"
      />

      <Image
        src="/hero-bg.svg"
        height={830}
        width={830}
        alt="background image"
        className="absolute top-0 right-0 object-contain -z-10 h-[90vh]"
      />
    </section>
  );
};

export default Hero;
