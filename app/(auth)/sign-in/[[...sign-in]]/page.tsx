import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <SignIn />
    </main>
  );
};

export default page;
