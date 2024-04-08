"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  icon?: string;
  className?: string;
  onClick?: any;
};

const HomeCard = (props: Props) => {
  const { title, description, icon, onClick, className } = props;
  return (
    <div
      className={cn(
        className,
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-lg cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex justify-center items-center size-12 bg-slate-600 rounded-xl glassmorphism">
        <Image src={icon || ""} alt="Add meeting icon" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
