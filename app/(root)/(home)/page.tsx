import StreamClientProvider from "@/Providers/StreamClientProvider";
import MeetingTypeList from "@/components/global/meetingTypeList";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const currentTime = new Date();
  const time = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = currentTime.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <StreamClientProvider>
      <section className="flex flex-col gap-10 text-white">
        <div className="bg-hero w-full h-[300px] rounded-lg bg-cover">
          <div className="flex h-full flex-col justify-between px-5 py-8">
            <h2 className="backdrop-blur-sm py-1 max-w-[270px] bg-slate-600 rounded-sm text-center text-base font-normal">
              Upcoming meeting at 12:30 PM
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-7xl font-extrabold lg:text-9xl">{time}</h1>
              <p className="text-lg font-medium lg:text-2xl text-sky-1">
                {date}
              </p>
            </div>
          </div>
        </div>
        <MeetingTypeList />
      </section>
    </StreamClientProvider>
  );
};

export default page;
