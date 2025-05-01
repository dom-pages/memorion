import { useEffect, useRef } from 'react';

export function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const text = 'ÚLTIMAS NOTICIAS DE BIENESTAR Y SALUD - ';
    const repeatedText = text.repeat(10); // Repete o texto várias vezes para garantir o efeito contínuo

    ticker.innerHTML = repeatedText;

    let position = 0;
    const speed = 50; // pixels por segundo

    const animate = () => {
      position -= speed / 60; // 60fps
      if (position <= -ticker.offsetWidth) {
        position = 0;
      }
      ticker.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden py-2 w-full" style={{ backgroundColor: '#810405' }}>
      <div 
        ref={tickerRef}
        className="whitespace-nowrap text-white text-xs font-light"
        style={{ display: 'inline-block' }}
      />
    </div>
  );
} 