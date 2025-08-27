'use client';

import MuxPlayer from '@mux/mux-player-react';

interface MuxVideoProps {
  playbackId: string;
  className?: string;
}

export default function MuxVideo({ playbackId, className }: MuxVideoProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      autoPlay
      muted
      loop
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '100vw',
        minHeight: '100vh',
        width: 'auto',
        height: 'auto',
        aspectRatio: '512/271',
        objectFit: 'cover',
        zIndex: 0,
      }}
    />
  );
}