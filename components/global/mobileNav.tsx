"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sideBarLinks } from "@/app/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const MobileNav = (props: Props) => {
  const pathName = usePathname();

  return (
    <section className="">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            className="cursor-pointer sm:hidden"
            alt="menu"
            width={36}
            height={36}
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <Link href={"/"} className="flex flex-row gap-1 items-center">
            <Image
              src="icons/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Loom</p>
          </Link>
          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col gap-6 text-white pt-16 h-full">
                {sideBarLinks.map((link, index) => {
                  const isActive =
                    pathName === link.path ||
                    pathName.startsWith(`${link.path}/`);

                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={link.path}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full",
                          { "bg-blue-1": isActive }
                        )}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
