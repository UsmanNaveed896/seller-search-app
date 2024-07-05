import React, { useEffect, useState } from 'react';
import {
  LivestreamPlayer,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";

const apiKey = "mmhfdzb5evj2";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiVGFsb25fS2FycmRlIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9UYWxvbl9LYXJyZGUiLCJpYXQiOjE3MTk5MDE2NzEsImV4cCI6MTcyMDUwNjQ3Nn0.ZWfx1lruRx5PLAtRG6RRAVmTHrJs0UtT2DafxVkd0tE";
const userId = "Talon_Karrde";
const callId = "Tt9FnsffqH8i";
const user: User = { id: userId, name: "Tutorial" };
const client = new StreamVideoClient({ apiKey, user, token });

export default function LiveStream() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLiveStreamStatus = async () => {
      try {
        const call = client.call('livestream', callId);
        const callState = await call.get();
        
        const liveStartedAt = callState.call.session?.live_started_at;
        const liveEndedAt = callState.call.session?.live_ended_at;
        console.log(liveEndedAt,"liveEndedAt")

        if (liveStartedAt && !liveEndedAt) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
      } catch (error) {
        console.error('Error checking livestream status:', error);
      }
    };

    checkLiveStreamStatus();
  }, []);
console.log(isLive,"islive")
  return (
    <StreamVideo client={client}>
      {isLive ? (
        <LivestreamPlayer callType="livestream" callId={callId} />
      ) : (
        <p className='font-bold text-black'>No active livestream</p>
      )}
    </StreamVideo>
  );
}
