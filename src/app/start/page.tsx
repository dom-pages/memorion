'use client';

import React, { useEffect, useState, useCallback } from 'react';
// import Header from '@/components/Header';
// import NewsTicker from '@/components/NewsTicker';
import VSLBlackV2 from '@/components/VSLBlackV2';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import Image from 'next/image';
// import Link from 'next/link';
//import FAQ from '@/components/FAQ';
//import CommentSection from '@/components/CommentSection';
//import BottleCounter from '@/components/BottleCounter';
import { useSearchParams } from 'next/navigation';


export default function Home() {
  const { isBlack } = useTraffic();
  const [currentDate, setCurrentDate] = useState('');
  const [visible, setVisible] = useState(false);
  
  // Captura parâmetros da URL para repassar aos checkouts
  const searchParams = useSearchParams();
  const appendSearchParams = useCallback(
    (baseUrl: string) => {
      const queryString = searchParams.toString();
      if (!queryString) return baseUrl;
      // Evita duplicar o ? caso o link já possua parâmetros (ex: afid)
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}${queryString}`;
    },
    [searchParams]
  );

  // Monitora o tempo do vídeo e controla visibilidade dos cards
  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedVideoTime = Number(localStorage.getItem('688f803f3614ea4fa0b34a73'));
        
        if (storedVideoTime > 2473) { // 41:13 minutos (2473 segundos)
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [visible]);

  return (
    <main>
      <UTMifyPixel />
        {/* <Header /> */}
        {/* <NewsTicker /> */}
        <div className="px-6 md:px-8 py-4">
          <div className="flex flex-col items-center py-4">
            <div className="w-full max-w-2xl">
              <h1 className="text-2xl md:text-4xl leading-tight mb-2 text-left md:text-center">
                <span className="font-bold text-red-600">URGENT: <span className="font-semibold text-black">Scientists uncover a Natural Support for Memory Loss that can be made at Home</span></span>
                <br/>
                <span className="font-regular text-black text-sm">(Over 15,000 Americans are doing this for less than $45!)</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-full max-w-3xl mx-auto text-center">
              {isBlack ? <VSLBlackV2 /> : <VSLWhite />}
            </div>
          </div>
          <ViewerCounter />
          {/* Centralizar logos */}
          <div className="flex justify-center my-8 w-full">
            <Image src="/images/news-logos.webp" alt="Logos" width={600} height={80} style={{height: 'auto'}} className="mx-auto" />
          </div>
          {/* Seção de comentários */}
          {/* <CommentSection /> */}
        </div>
    </main>
  );
} 