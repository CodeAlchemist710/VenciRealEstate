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
      className={className}
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        transform: 'scale(1.05)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1.05)',
      }}
    />
  );
}