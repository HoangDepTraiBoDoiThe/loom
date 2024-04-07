"use client";

import { sideBarLinks } from "@/app/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const SideBar = (props: Props) => {
  const pathName = usePathname();

  return (
    <div>
      <section className="sticky left-0 top-0 flex flex-col justify-between p-6 pt-26 text-white h-screen w-fit bg-dark-1 max-md:hidden lg:w-[264px]">
        <div className="flex flex-col flex-1 gap-6">
          {sideBarLinks.map((link, index) => {
            const isActive =
              pathName === link.path || pathName.startsWith(link.path);
            return (
              <Link
                href={link.path}
                key={index}
                className={cn(
                  "flex gap-4 items-center p-4 rounded-lg justify-start",
                  { "bg-dark-2": isActive }
                )}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={26}
                  height={26}
                />
                <p className="text-lg font-semibold max-lg:hidden">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
