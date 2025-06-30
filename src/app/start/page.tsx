'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import VSLBlackV2 from '@/components/VSLBlackV2';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import CommentSection from '@/components/CommentSection';
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
        const storedVideoTime = Number(localStorage.getItem('68618af15e5d86d7e5940f25'));
        
        if (storedVideoTime > 2180) { // 36:20 minutos (2180 segundos)
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [visible]);

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
          <div className="flex flex-col items-center py-4">
            <div className="w-full max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2 text-left md:text-center">
                <span className="text-[#B82613]">Medical Breakthrough:</span>
                <span className="text-black"> How a Tiny Parasite Could Be Behind Millions of Diabetes Cases</span>
              </h1>
              <div className="font-bold mb-1 md:text-center text-left">By James Carter – Investigative Health Reporter</div>
              <div className="text-gray-500 mb-2 text-base md:text-center text-left">
                Updated 27 minutes ago - {currentDate || 'Fri, June 20, 2025'}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              {isBlack ? <VSLBlackV2 /> : <VSLWhite />}
            </div>
          </div>
          <ViewerCounter />
          {/* Imagens das garrafas - Layout responsivo */}
          {visible && (
            <div className="w-full flex flex-col items-center my-8"> 
              <div className="flex flex-col md:flex-row justify-center items-end gap-6 w-full max-w-4xl mx-auto">
                {/* 6-bottle.webp - Primeira */}
                <div id="bottle-6" className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <Link 
                    href={appendSearchParams('https://sugardeletecart.shop/checkout/175111632:1?afid=D5nTA8k92T')}
                    className="block w-full md:w-auto"
                  >
                    <Image 
                      src="/images/6-bottle.webp" 
                      alt="Garrafa 6" 
                      width={800} 
                      height={1200} 
                      style={{height: 'auto', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
                      className="w-full md:w-60 object-cover"
                      priority
                    />
                  </Link>
                </div>
                {/* 3-bottle.webp - Segunda */}
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <Link 
                    href={appendSearchParams('https://sugardeletecart.shop/checkout/181173731:1?afid=gy1gqe2noS')}
                    className="block w-full md:w-auto"
                  >
                    <Image 
                      src="/images/3-bottle.webp" 
                      alt="Garrafa 3" 
                      width={800} 
                      height={1200} 
                      style={{height: 'auto', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
                      className="w-full md:w-60 object-cover"
                      priority
                    />
                  </Link>
                </div>
                {/* 2-bottle.webp - Terceira */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <Link 
                    href={appendSearchParams('https://sugardeletecart.shop/checkout/181173778:1?afid=1WAOyh5ihD')}
                    className="block w-full md:w-auto"
                  >
                    <Image 
                      src="/images/2-bottle.webp" 
                      alt="Garrafa 2" 
                      width={800} 
                      height={1200} 
                      style={{height: 'auto', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
                      className="w-full md:w-60 object-cover"
                      priority
                    />
                  </Link>
                </div>
              </div>
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
                  Still not sure? Remember, <b>Sugar Delete</b> comes with a <b>100% Money-Back Guarantee for a full 180 days!</b> That means if you don't get the results we promise or you change your mind for any reason at all, just call or email our support team within the next 6 months and quickly get every penny back. What do you have to lose? Your success is virtually guaranteed!
                </p>
                <div className="text-[#B82613] text-lg font-bold">Limited Time Offer</div>
                <a href="#bottle-6" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-md">
                  YES! I Want Sugar Delete
                </a>
              </div>
              {/* FAQ */}
              <FAQ />
            </div>
          )}
          {/* Centralizar logos */}
          <div className="flex justify-center my-8 w-full">
            <Image src="/images/logos.webp" alt="Logos" width={600} height={80} style={{height: 'auto'}} className="mx-auto" />
          </div>
          {/* Seção de comentários */}
          <CommentSection />
        </div>
      </>
    </main>
  );
} 