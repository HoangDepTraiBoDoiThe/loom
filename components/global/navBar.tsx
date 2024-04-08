import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobileNav";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="fixed flex justify-between w-full z-50 bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex flex-row gap-1 items-center">
        <Image
          src="icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Loom
        </p>
      </Link>
      <div className="flex gap-5">
        <UserButton />
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
