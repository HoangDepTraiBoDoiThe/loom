"use client";

import MeetingRoom from "@/components/global/meetingRoom";
import MeetingSetup from "@/components/global/meetingSetup";
import Loader from "@/components/ui/loader";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type Props = {
  params: { id: string };
};

const Page = (props: Props) => {
  const { id } = props.params;
  const [isSetupComplete, setIsSetupComplete] = useState(true);
  const { isLoaded, user } = useUser();
  const { call, isLoading } = useGetCallById(id);
  if (isLoading || !isLoaded) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;
