'use client';

import React, { useState, useEffect } from 'react';

export default function BottleCounter() {
  const [count, setCount] = useState(153);
  const [isVisible, setIsVisible] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    // Monitora o tempo do vídeo para aparecer com o mesmo delay
    const checkVideoTime = () => {
      const storedVideoTime = Number(localStorage.getItem('687d862b2a38c6be43a2d847'));
      
      if (storedVideoTime > 2080) { // 34:40 minutos (2080 segundos)
        setIsVisible(true);
        if (!startTime) {
          setStartTime(Date.now());
        }
      }
    };

    const intervalId = setInterval(checkVideoTime, 1000);
    return () => clearInterval(intervalId);
  }, [startTime]);

  useEffect(() => {
    if (isVisible && count > 6 && startTime) {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      
      let reductionAmount = 1;
      let interval = 2000; // 2 segundos padrão

      // Tempo total disponível: 5 minutos (299 segundos)
      const totalTimeAvailable = 299; // 34:48 - 29:49 = 4:59 = 299 segundos
      
      // Primeiro minuto: redução mais rápida
      if (elapsedSeconds <= 60) {
        if (count > 100) {
          reductionAmount = Math.floor(Math.random() * 3) + 1; // 1-3 potes
          interval = 1200; // 1.2 segundos
        } else if (count > 50) {
          reductionAmount = Math.floor(Math.random() * 2) + 1; // 1-2 potes
          interval = 1500; // 1.5 segundos
        } else if (count > 30) {
          reductionAmount = 1;
          interval = 1800; // 1.8 segundos
        }
      } else {
        // Após o primeiro minuto: redução mais lenta baseada no tempo restante
        const remainingSeconds = totalTimeAvailable - elapsedSeconds;
        if (remainingSeconds > 0) {
          const remainingBottles = count - 6;
          interval = Math.max(2000, (remainingSeconds * 1000) / remainingBottles);
          reductionAmount = 1;
        }
      }

      const timer = setTimeout(() => {
        setCount(prev => Math.max(6, prev - reductionAmount));
      }, interval);

      return () => clearTimeout(timer);
    }
  }, [count, isVisible, startTime]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full flex justify-center mb-6">
      <div className="w-full max-w-4xl bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-center">
        <div className="text-sm font-medium mb-1">BOTTLES REMAINING:</div>
        <div className="text-3xl font-bold">{count}</div>
        <div className="text-xs mt-1">Hurry! Stock is running out!</div>
      </div>
    </div>
  );
} 