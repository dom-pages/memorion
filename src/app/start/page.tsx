'use client';

import React, { useEffect, useState, useCallback } from 'react';
// import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import VSLBlackV2 from '@/components/VSLBlackV2';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import Image from 'next/image';
// import Link from 'next/link';
import { trackClick } from '@/utils/ClickTracker';
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
        <NewsTicker />
        <div className="px-6 md:px-8 py-4">
          <div className="flex flex-col items-center py-4">
            <div className="w-full max-w-2xl">
              <h1 className="text-2xl md:text-4xl leading-tight mb-2 text-left md:text-center">
                <span className="font-light text-black">Millions of diabetics are fighting the <span className="bg-yellow-300">wrong enemy.</span></span>
                <br/>
                <span className="font-light text-black">Discover the true cause of type 2 diabetes — and why no one ever told you about it.</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              {isBlack ? <VSLBlackV2 /> : <VSLWhite />}
            </div>
          </div>
          <ViewerCounter />

          {visible && (
            <>
              {/* Imagem de garantia - centralizada abaixo das garrafas */}
              <div className="flex justify-center w-full my-8 mx-auto">
                <Image 
                  src="/images/180-guarantee.webp" 
                  alt="180 Dias de Garantia" 
                  width={600} 
                  height={400} 
                  style={{height: 'auto'}}
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
              {/* Texto de garantia, oferta e botão âncora - centralizados */}
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-2xl mx-auto">
                <p className="text-base md:text-lg">
                  Still not sure? Remember, <b>Block Sugar</b> comes with a <b>100% Money-Back Guarantee for a full 180 days!</b> That means if you don't get the results we promise or you change your mind for any reason at all, just call or email our support team within the next 6 months and quickly get every penny back. What do you have to lose? Your success is virtually guaranteed!
                </p>
                <div className="text-[#B82613] text-lg font-bold">Limited Time Offer</div>
                <a 
                  href="#bottle-6-anchor" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-md"
                >
                  YES! I Want Block Sugar
                </a>
              </div>
            </>
          )}
              {/* FAQ */}
             {/* <FAQ /> */}

          {/* Centralizar logos */}
          <div className="flex justify-center my-8 w-full">
            <Image src="/images/logos.webp" alt="Logos" width={600} height={80} style={{height: 'auto'}} className="mx-auto" />
          </div>
          {/* Seção de comentários */}
          {/* <CommentSection /> */}
        </div>
    </main>
  );
} 