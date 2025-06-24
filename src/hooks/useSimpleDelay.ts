import { useEffect, useState } from 'react';

export function useSimpleDelay(delaySeconds: number) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    console.log('useSimpleDelay iniciado com delay de', delaySeconds, 'segundos');
    
    const timer = setTimeout(() => {
      console.log('🎉 Timer atingido! Mostrando elementos...');
      setShouldShow(true);
      
      // Mostrar elementos manualmente
      const hiddenElements = document.querySelectorAll('.esconder');
      console.log('Elementos ocultos encontrados:', hiddenElements.length);
      hiddenElements.forEach((el, index) => {
        console.log('Mostrando elemento', index, ':', el.tagName, el.className);
        (el as HTMLElement).style.display = 'block';
        el.classList.remove('esconder');
        el.classList.add('mostrar');
      });
    }, delaySeconds * 1000);

    return () => {
      console.log('Limpando timer do useSimpleDelay');
      clearTimeout(timer);
    };
  }, [delaySeconds]);

  return shouldShow;
} 