import React from 'react';
import { ParticipantView, useCallStateHooks } from '@stream-io/video-react-sdk';

const ViewerView = ({ call }) => {
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();


  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '4px' }}>
      {participants.length > 0 ? (
        participants.map((participant) => (
          <ParticipantView key={participant.sessionId} participant={participant} />
        ))
      ) : (
        <div>No participants are currently streaming.</div>
      )}
    </div>
  );
};

export default ViewerView;