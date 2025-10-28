"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackAB = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'vid-69002d162cbcc0682c85a4d9';
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
        id="vturb-vid-69002d162cbcc0682c85a4d9" 
        strategy="afterInteractive"
        src="https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/69002d162cbcc0682c85a4d9/v4/player.js"
      />
    </div>
  );
};

export default VSLBlackAB;