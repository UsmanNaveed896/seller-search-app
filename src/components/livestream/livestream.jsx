import {
    LivestreamPlayer,
    StreamVideo,
    StreamVideoClient,
    User,
  } from "@stream-io/video-react-sdk";
  
  const apiKey = "mmhfdzb5evj2";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUHJpbmNlX1hpem9yIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9QcmluY2VfWGl6b3IiLCJpYXQiOjE3MTg5NDMxMDUsImV4cCI6MTcxOTU0NzkxMH0.cRHylcjf9AFonWuRA_WWOfV6dZNmofRwDyD737wrWic";
  const userId = "Prince_Xizor";
  const callId = "eLxKMCEhAxRD";
  const user: User = { id: userId, name: "Tutorial" };
  const client = new StreamVideoClient({ apiKey, user, token });
  
  export default function LiveStream() {
    return (
      <StreamVideo client={client}>
        <LivestreamPlayer callType="livestream" callId={callId} />
      </StreamVideo>
    );
  }