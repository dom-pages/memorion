import { useEffect } from 'react';

const VSLBlack = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'scr_681e206cf93e3486b82673cd';
    script.src = 'https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/681e206cf93e3486b82673cd/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('scr_681e206cf93e3486b82673cd');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div id="vid_681e206cf93e3486b82673cd" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0', borderRadius: '16px', overflow: 'hidden' }}>
      <img
        id="thumb_681e206cf93e3486b82673cd"
        src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/681e206cf93e3486b82673cd/thumbnail.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: '16px',
        }}
        alt="thumbnail"
      />
      <div
        id="backdrop_681e206cf93e3486b82673cd"
        style={{
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
          borderRadius: '16px',
        }}
      />
    </div>
  );
};

export default VSLBlack; 