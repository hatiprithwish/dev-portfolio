import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" bg-[#F3FCFF]">
      <footer className="mx-10 lg:mx-28 py-10 flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src="logo.svg" alt="logo" width={150} height={50} />
          </Link>
          <p className="text-slate-500">Handcrafted by me &copy; 2023</p>
        </div>

        <div className="flex gap-5 mr-16">
          <Link href="https://github.com/Prithwish-Hati">
            <Image
              src="/github-logo.svg"
              width={40}
              height={40}
              alt="GitHub"
              className="cursor-pointer"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/prithwishhati/">
            <Image
              src="/linkedin.svg"
              width={45}
              height={45}
              alt="LinkedIn"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
