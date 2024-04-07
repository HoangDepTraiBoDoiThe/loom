import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <main>
      NavBar
      <div className="flex">
        SideBar
        <section className="flex flex-1 flex-col min-h-full px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{props.children}</div>
        </section>
      </div>
    </main>
  );
};

export default layout;
