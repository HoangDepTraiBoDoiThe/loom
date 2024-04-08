"use client";

import React, { useState } from "react";
import HomeCard from "./homeCard";
import { useRouter } from "next/navigation";

type Props = {};

const MeetingTypeList = (props: Props) => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        title="New Meeting"
        description="Start a new meeting with your team."
        icon="/icons/add-meeting.svg"
        className="bg-orange-1"
        onClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        title="Join Meeting"
        description="Join a meeting via invite link or code."
        icon="/icons/join-meeting.svg"
        className="bg-blue-1"
        onClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        title="Schedule Meeting"
        description="Schedule a meeting for later."
        icon="/icons/schedule.svg"
        className="bg-purple-1"
        onClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        title="Recording"
        description="View all your recordings."
        icon="/icons/recordings.svg"
        className="bg-yellow-1"
        onClick={() => router.push("/recordings")}
      />
    </section>
  );
};

export default MeetingTypeList;
