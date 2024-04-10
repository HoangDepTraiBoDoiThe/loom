"use client";

import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallById = (
  id: string | string[]
): { call?: Call; isLoading?: boolean } => {
  const [call, setCall] = useState<Call>();
  const [isLoading, setIsLoading] = useState(true);
  const videoClient = useStreamVideoClient();

  useEffect(() => {
    console.log("videoClient", videoClient);
    if (!videoClient) return;
    const loadCall = async () => {
      const { calls } = await videoClient.queryCalls({
        filter_conditions: {
          id,
        },
      });
      console.log("calls", calls);
      if (calls.length > 0) setCall(calls[0]);
      setIsLoading(false);
    };
    loadCall();
  }, [id, videoClient]);

  if (!videoClient) return {};

  return { call, isLoading };
};
