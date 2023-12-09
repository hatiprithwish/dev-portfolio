import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-10 lg:mx-28 flex items-center justify-between relative max-h-[850px] overflow-hidden">
      <div>
        <h2 className="text-sm sm:text-base md:text-xl font-extralight mt-3">
          Hi, Hati Here! I'm a
        </h2>
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
          FULL STACK
          <br />
          DEVELOPER
        </h1>
        <h3 className="text-xs sm:text-base md:text-xl xl:text-2xl my-4 sm:my-5 font-light">
          Crafting Seamless Full Stack <br className="max-sm:hidden" />
          Web Experiences in Next.js 14 & React.js
        </h3>
        <button
          type="button"
          className="bg-magenta text-white text-xs md:text-xl p-2 md:p-3 font-semibold rounded-md hover:bg-skyblue transition-all"
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
