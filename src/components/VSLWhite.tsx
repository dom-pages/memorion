import React, { useEffect } from 'react';

export const VSLWhite = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'scr_6813a1b7338104751ff7b890';
    script.src = 'https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/6813a1b7338104751ff7b890/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('scr_6813a1b7338104751ff7b890');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div id="vid_6813a1b7338104751ff7b890" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
        <img 
          id="thumb_6813a1b7338104751ff7b890" 
          src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/6813a1b7338104751ff7b890/thumbnail.jpg" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            display: 'block' 
          }} 
          alt="thumbnail" 
        />
        <div 
          id="backdrop_6813a1b7338104751ff7b890" 
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
    </div>
  );
}; 