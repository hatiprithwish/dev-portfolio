"use client";

import { navLinks } from "@/constants";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="max-w-[1440px] w-full z-10 sticky top-0 lg:py-4 bg-white py-2">
      <nav className="mx-10 lg:mx-28 flex items-center justify-between">
        <Link href="/">
          <Image
            src="logo.svg"
            alt="logo"
            width={150}
            height={50}
            className="object-contain max-sm:w-[100px]"
          />
        </Link>

        <span className="lg:flex hidden justify-end gap-7 text-lg xl:text-xl">
          {navLinks.map((link: any) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setActive(link.text)} //Onclicking, the active state will be updated to the 'text' value of link
              className={classNames({
                "text-magenta underline underline-offset-4":
                  active == link.text,
                "text-black": active !== link.text,
                " hover:text-magenta cursor-pointer transition-colors": true,
              })}
            >
              {link.text}
            </Link>
          ))}
        </span>

        {/* Mobile and Tablet */}
        <div className="lg:hidden flex justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="Mobile Menubar"
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} //When you click the close.svg, state is updated to no-toggle.
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } px-4 py-3 bg-sky-200 absolute top-10 my-5 right-0 mx-4 min-w-[140px] rounded-xl`}
          >
            <span className="list-none flex items-start flex-col gap-1">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.key}
                  href={navLink.href}
                  onClick={() => setActive(navLink.text)} //Onclicking, the active state will be updated to the 'text' value of navLink
                  className={classNames({
                    "text-magenta font-medium": active == navLink.text,
                    "text-slate-800": active !== navLink.text,
                    "hover:text-magenta cursor-pointer transition-colors": true,
                  })}
                >
                  {navLink.text}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
