'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackV2 = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'vid-685952bbbeca9ba020a4cd33';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      el.style.maxWidth = '600px';
      el.style.borderRadius = '16px';
      el.style.overflow = 'hidden';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <div ref={playerRef}></div>
      <Script id="vturb-685952bbbeca9ba020a4cd33" strategy="afterInteractive">
        {`
          // Carrega o script do player
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/685952bbbeca9ba020a4cd33/v4/player.js";
          s.async=!0;
          document.head.appendChild(s);
          
          // Função para forçar auto-play
          function forceAutoPlay() {
            var player = document.getElementById('vid-685952bbbeca9ba020a4cd33');
            
            // Método 1: Tentar play direto no player
            if (player && player.play) {
              try {
                player.play();
                console.log('Auto-play executado no player');
              } catch(e) {
                console.log('Erro no play direto:', e);
              }
            }
            
            // Método 2: Procurar vídeo dentro do player
            if (player) {
              var video = player.querySelector('video');
              if (video) {
                try {
                  video.play();
                  console.log('Auto-play executado no vídeo');
                } catch(e) {
                  console.log('Erro no play do vídeo:', e);
                }
              }
            }
            
            // Método 3: Simular clique no player
            if (player) {
              try {
                var clickEvent = new MouseEvent('click', {
                  view: window,
                  bubbles: true,
                  cancelable: true
                });
                player.dispatchEvent(clickEvent);
                console.log('Clique simulado no player');
              } catch(e) {
                console.log('Erro no clique simulado:', e);
              }
            }
            
            // Método 4: Procurar botão de play e clicar
            var playButton = document.querySelector('[data-play]') || 
                           document.querySelector('.play-button') || 
                           document.querySelector('.vturb-play');
            if (playButton) {
              try {
                playButton.click();
                console.log('Clique no botão de play');
              } catch(e) {
                console.log('Erro no clique do botão:', e);
              }
            }
          }
          
          // Executa auto-play em 1 segundo
          setTimeout(forceAutoPlay, 1000);
          
          // Executa novamente em 3 segundos (fallback)
          setTimeout(forceAutoPlay, 3000);
          
          // Executa novamente em 5 segundos (fallback extra)
          setTimeout(forceAutoPlay, 5000);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackV2; 