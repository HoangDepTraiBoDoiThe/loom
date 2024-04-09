"use client";
import { useState, useEffect } from "react";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { tokenProvider } from "@/actions/stream.action";
import Loader from "@/components/ui/loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

interface Props {
  children: React.ReactNode;
}

const StreamClientVideoProvider = ({ children }: Props) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) throw Error("apiKey is invalid");
    try {
      const streamVideoClient = new StreamVideoClient({
        apiKey,
        user: {
          id: user?.id,
          name: user?.fullName || user?.firstName || user?.id,
          image: user?.imageUrl,
        },
        tokenProvider,
      });
      setVideoClient(streamVideoClient);
    } catch (error) {
      console.log(error);
    }
  }, [isLoaded, user]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamClientVideoProvider;
