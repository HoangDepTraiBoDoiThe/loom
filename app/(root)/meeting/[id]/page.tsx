"use client";

import MeetingRoom from "@/components/global/meetingRoom";
import MeetingSetup from "@/components/global/meetingSetup";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type Props = {
  params: { id: string };
};

const Page = (props: Props) => {
  const [isSetupMeetingRoom, setIsSetupMeetingRoom] = useState(false);

  const { id } = props.params;
  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme>
          {isSetupMeetingRoom ? <MeetingRoom /> : <MeetingSetup />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;
