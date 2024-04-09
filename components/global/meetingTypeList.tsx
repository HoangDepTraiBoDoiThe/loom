"use client";

import React, { useState } from "react";
import HomeCard from "./homeCard";
import { useRouter } from "next/navigation";
import ModalMeeting from "./modalMeeting";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";

type Props = {};

const MeetingTypeList = (props: Props) => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [values, setValues] = useState<{
    startAt: string;
    description: string;
  }>();
  const client = useStreamVideoClient();
  const { isLoaded, user } = useUser();

  const createMeeting = async () => {
    if (!user || !client) return;
    const start = values?.startAt || new Date().toISOString();
    const desc = values?.description || "Instant meeting";
    try {
      const call = client?.call("default", crypto.randomUUID());
      call.getOrCreate({
        data: {
          starts_at: start,
          custom: {
            description: desc,
          },
        },
      });

      if (!values?.description) router.push(`/meeting/${call?.id}`);
    } catch (error) {
      console.log("createMeeting: ", error);
    }
  };

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
      <ModalMeeting
        title="Create a new meeting"
        description="Start a new meeting with your team."
        isOpen={meetingState === "isInstantMeeting"}
        handleClick={createMeeting}
        onClose={() => setMeetingState(undefined)}
      />
    </section>
  );
};

export default MeetingTypeList;
