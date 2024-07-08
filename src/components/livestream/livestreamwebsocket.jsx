import React, { useRef, useEffect, useState } from 'react';

const ClientLiveStream = () => {
  const videoRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [mediaSource, setMediaSource] = useState(null);
  const [sourceBuffer, setSourceBuffer] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:7800');
    setSocket(ws);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    ws.onmessage = (event) => {
      if (mediaSource && mediaSource.readyState === 'open' && sourceBuffer && !sourceBuffer.updating) {
        sourceBuffer.appendBuffer(new Uint8Array(event.data));
      }
    };

    // Cleanup function
    return () => {
      if (ws) {
        ws.close();
      }
      if (mediaSource) {
        mediaSource.endOfStream();
      }
    };
  }, [mediaSource, sourceBuffer]);
console.log(socket,"socket")
  useEffect(() => {
    if (!mediaSource) {
      const newMediaSource = new MediaSource();
      setMediaSource(newMediaSource);

      newMediaSource.addEventListener('sourceopen', () => {
        const buffer = newMediaSource.addSourceBuffer('video/webm; codecs="vp8, opus"');
        setSourceBuffer(buffer);
      });

      return () => {
        newMediaSource.removeEventListener('sourceopen', () => {});
      };
    }
  }, [mediaSource]);

  useEffect(() => {
    if (videoRef.current && mediaSource) {
      videoRef.current.src = URL.createObjectURL(mediaSource);
    }
  }, [mediaSource]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center mt-16 bg-gray-900 text-white w-[75%] rounded-xl">
        <video ref={videoRef} className="w-full rounded-lg" autoPlay controls />
      </div>
    </div>
  );
};

export default ClientLiveStream;
