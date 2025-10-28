"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackUP1 = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'vid-6900cbe603ede340e9b12231';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      el.style.maxWidth = '400px';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>
      <Script 
        id="vturb-vid-6900cbe603ede340e9b12231" 
        strategy="afterInteractive"
        src="https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/6900cbe603ede340e9b12231/v4/player.js"
      />
    </div>
  );
};

export default VSLBlackUP1;
