'use client';

import React, { useEffect } from 'react';

export default function VSLBlack() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'scr_681e206cf93e3486b82673cd';
    script.src = 'https://player-cdn.com/video/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
      <div id="vid_681e206cf93e3486b82673cd" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
        <img 
          id="thumb_681e206cf93e3486b82673cd" 
          src="https://player-cdn.com/api/player/video/681e206cf93e3486b82673cd/thumbnail.jpg" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} 
        />
        <div 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer', borderRadius: '16px' }} 
          id="play_681e206cf93e3486b82673cd"
        />
      </div>
    </div>
  );
} 