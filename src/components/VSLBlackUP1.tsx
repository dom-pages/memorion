"use client";

import React from 'react';
import Script from 'next/script';

const VSLBlackUP1 = () => {
  return (
    <div className="w-full">
      <div id="vid_688a95b18d9ea41a82c46b12" style={{position: 'relative', width: '100%', padding: '177.77777777777777% 0 0'}}>
        <img 
          id="thumb_688a95b18d9ea41a82c46b12" 
          src="https://images.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/688a95b18d9ea41a82c46b12/thumbnail.jpg" 
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} 
          alt="thumbnail" 
        />
        <div 
          id="backdrop_688a95b18d9ea41a82c46b12" 
          style={{
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%'
          }}
        />
      </div>
      <Script id="scr_688a95b18d9ea41a82c46b12" strategy="afterInteractive">
        {`
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/688a95b18d9ea41a82c46b12/player.js";
          s.async=!0;
          document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackUP1;
