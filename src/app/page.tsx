'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import VSLBlackV1 from '@/components/VSLBlackV1';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const { isBlack } = useTraffic();
  const [currentDate, setCurrentDate] = useState('');
  const searchParams = useSearchParams();
  

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo')
      .then(res => res.json())
      .then(data => {
        if (data && data.datetime) {
          const date = new Date(data.datetime);
          const options: Intl.DateTimeFormatOptions = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          };
          setCurrentDate(date.toLocaleDateString('en-US', options));
        }
      })
      .catch(() => {
        // Fallback para data local do navegador
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { 
          weekday: 'short', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        };
        setCurrentDate(date.toLocaleDateString('en-US', options));
      });
  }, []);

  return (
    <main>
      <UTMifyPixel />
      <>
        <Header />
        <NewsTicker />
        <div className="px-6 md:px-8 py-4">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              {isBlack ? <VSLBlackV1 /> : <VSLWhite />}
            </div>
          </div>
          <ViewerCounter />
          
          
          <div className="flex justify-center my-8">
          </div>
        </div>
      </>
    </main>
  );
}