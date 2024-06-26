"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const tokenProvider = async () => {
  const user = await currentUser();
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;

  if (!user) throw Error("User not found");
  if (!apiKey) throw Error("API Key not found");
  if (!apiSecret) throw Error("API Secret not found");

  const client = new StreamClient(apiKey, apiSecret);
  const expirationTime = Math.floor(Date.now() / 1000) + 3600; // optional. defaults to 1 hour
  const issuedAt = Math.floor(Date.now() / 1000) - 60;
  const token = client.createToken(user.id, expirationTime, issuedAt);

  return token;
};
