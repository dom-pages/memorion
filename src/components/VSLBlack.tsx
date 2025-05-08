import { useEffect } from 'react';

export function VSLBlack() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/681bae070ccbadc7a28778d3/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="vid_681bae070ccbadc7a28778d3" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img 
        id="thumb_681bae070ccbadc7a28778d3" 
        src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/681bae070ccbadc7a28778d3/thumbnail.jpg" 
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
        id="backdrop_681bae070ccbadc7a28778d3" 
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
  );
} 