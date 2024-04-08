import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <SignUp />
    </main>
  );
};

export default page;
