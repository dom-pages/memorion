'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import VSLBlack from '@/components/VSLBlack';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { TrafficFilterProvider } from '@/components/TrafficFilterProvider';
import { useBackRedirect } from '@/hooks/useBackRedirect';
import Image from 'next/image';

export default function Home() {
  useBackRedirect('/promo');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo')
      .then(res => res.json())
      .then(data => {
        if (data && data.datetime) {
          const date = new Date(data.datetime);
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          setCurrentDate(`${day}/${month}/${year}`);
        }
      })
      .catch(() => {
        // Fallback para data local do navegador
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        setCurrentDate(`${day}/${month}/${year}`);
      });
  }, []);

  return (
    <main>
      <UTMifyPixel />
      <TrafficFilterProvider>
        {(isBlack) => (
          <>
            <Header />
            <NewsTicker />
            <div className="px-6 md:px-8 py-4">
              <div className="flex flex-col items-center py-4">
                <div className="w-full max-w-2xl">
                  <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2 text-left md:text-center">
                    <span className="text-[#B82613]">URGENTE:</span>
                    <span className="text-black"> El secreto de la Sal Rosa que hace que las mujeres pierdan 20kg en pocos dias...</span>
                  </h1>
                  <div className="font-bold mb-1 md:text-center text-left">Por Noticias de Salud</div>
                  <div className="text-gray-500 mb-2 text-base md:text-center text-left">
                    Actualizado hace 27 minutos - {currentDate || 'xx/xx/xxxx'}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-3xl">
                  {isBlack ? <VSLBlack /> : <VSLWhite />}
                </div>
              </div>
              <ViewerCounter />
              <div className="flex justify-center my-8">
                <Image src="/images/logos.webp" alt="Logos" width={600} height={80} style={{height: 'auto'}} />
              </div>
            </div>
          </>
        )}
      </TrafficFilterProvider>
    </main>
  );
} 