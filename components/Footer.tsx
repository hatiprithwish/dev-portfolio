import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#F3FCFF] max-w-[1440px] w-full">
      <footer className="mx-10 lg:mx-28 py-10">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src="logo.svg"
                alt="logo"
                width={150}
                height={50}
                className="object-contain max-sm:w-[100px]"
              />
            </Link>
          </div>

          <div className="flex gap-2 md:gap-5">
            <Link href="https://github.com/Prithwish-Hati">
              <Image
                src="/github-logo.svg"
                width={40}
                height={40}
                alt="GitHub"
                className="object-contain cursor-pointer max-sm:w-[25px]"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/prithwishhati/">
              <Image
                src="/linkedin.svg"
                width={45}
                height={45}
                alt="LinkedIn"
                className="cursor-pointer object-contain max-sm:w-[28px]"
              />
            </Link>
          </div>
        </div>
        <p className="text-slate-500 text-xs sm:text-base text-center mt-2">
          Handcrafted by me &copy; 2023
        </p>
      </footer>
    </section>
  );
};

export default Footer;
