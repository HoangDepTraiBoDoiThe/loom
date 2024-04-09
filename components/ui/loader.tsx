import Image from "next/image";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-full1">
      <Image
        src={"/icons/loading-circle.svg"}
        alt="loader"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
