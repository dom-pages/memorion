"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackAB = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'ab-6893bad7b2b07c908fdae4e0';
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
        id="vturb-ab-6893bad7b2b07c908fdae4e0" 
        strategy="afterInteractive"
        src="https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/ab-test/6893bad7b2b07c908fdae4e0/player.js"
      />
    </div>
  );
};

export default VSLBlackAB;