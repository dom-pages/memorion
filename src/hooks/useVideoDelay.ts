import { useEffect, useState } from 'react';

export function useVideoDelay(delaySeconds: number) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const checkVideoTime = () => {
      // Tentar usar a API do VTurb diretamente
      const vturbPlayer = document.querySelector('vturb-smartplayer') as any;
      
      if (vturbPlayer) {
        // Método 1: Tentar acessar propriedades do player
        if (vturbPlayer.currentTime !== undefined) {
          if (vturbPlayer.currentTime >= delaySeconds) {
            showElements();
            return;
          }
        }
        
        // Método 2: Tentar acessar via getCurrentTime()
        if (vturbPlayer.getCurrentTime && typeof vturbPlayer.getCurrentTime === 'function') {
          try {
            const currentTime = vturbPlayer.getCurrentTime();
            if (currentTime >= delaySeconds) {
              showElements();
              return;
            }
          } catch (e) {
            // Erro silencioso
          }
        }
        
        // Método 3: Tentar acessar via player.getTime()
        if (vturbPlayer.getTime && typeof vturbPlayer.getTime === 'function') {
          try {
            const currentTime = vturbPlayer.getTime();
            if (currentTime >= delaySeconds) {
              showElements();
              return;
            }
          } catch (e) {
            // Erro silencioso
          }
        }
        
        // Método 4: Tentar acessar via window object
        const windowAny = window as any;
        if (windowAny.player || windowAny.vturbPlayer || windowAny.videoPlayer) {
          const globalPlayer = windowAny.player || windowAny.vturbPlayer || windowAny.videoPlayer;
          
          if (globalPlayer.currentTime !== undefined) {
            if (globalPlayer.currentTime >= delaySeconds) {
              showElements();
              return;
            }
          }
          
          if (globalPlayer.getCurrentTime && typeof globalPlayer.getCurrentTime === 'function') {
            try {
              const currentTime = globalPlayer.getCurrentTime();
              if (currentTime >= delaySeconds) {
                showElements();
                return;
              }
            } catch (e) {
              // Erro silencioso
            }
          }
        }
      }
    };

    const showElements = () => {
      setShouldShow(true);
      
      const hiddenElements = document.querySelectorAll('.esconder');
      hiddenElements.forEach((el) => {
        (el as HTMLElement).style.display = 'block';
        el.classList.remove('esconder');
        el.classList.add('mostrar');
      });
      
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };

    // Iniciar verificação após 2 segundos
    timeout = setTimeout(() => {
      checkVideoTime();
      // Verificar a cada segundo
      interval = setInterval(checkVideoTime, 1000);
    }, 2000);

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [delaySeconds]);

  return shouldShow;
} 