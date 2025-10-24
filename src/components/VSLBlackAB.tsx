"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackAB = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'ab-68fb8a31795ae7583613ad37';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>
      <Script 
        id="vturb-ab-68fb8a31795ae7583613ad37" 
        strategy="afterInteractive"
        src="https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/ab-test/68fb8a31795ae7583613ad37/player.js"
      />
    </div>
  );
};

export default VSLBlackAB;