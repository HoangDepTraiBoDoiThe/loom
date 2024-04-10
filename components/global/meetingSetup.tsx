"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Mic } from "lucide-react";
import { Mina } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {
  setIsSetupComplete: (setIsSetupComplete: boolean) => void;
};

const MeetingSetup = (props: Props) => {
  const { setIsSetupComplete } = props;

  const [isMicCamToggedOn, setIsMicCamToggedOn] = useState(false);
  const call = useCall();
  useEffect(() => {
    if (!call) return;
    if (isMicCamToggedOn) {
      call.camera.enable();
      call.microphone.enable();
    } else {
      call.camera.disable();
      call.microphone.disable();
    }
  }, [call, call?.camera, call?.microphone, isMicCamToggedOn]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center text-white h-full">
      <h1 className="font-bold text-3xl">Preview</h1>
      <div className="rounded-2xl overflow-hidden max-w-[800px]">
        <VideoPreview />
      </div>
      <label className="flex">
        <input
          type="checkbox"
          checked={isMicCamToggedOn}
          onChange={(e) => {
            setIsMicCamToggedOn(e.target.checked);
          }}
        ></input>
        Start with camera and mic on.
      </label>
      <DeviceSettings />
      <Button className="bg-blue-1" onClick={() => setIsSetupComplete(true)}>
        Join Room
      </Button>
    </div>
  );
};

export default MeetingSetup;
