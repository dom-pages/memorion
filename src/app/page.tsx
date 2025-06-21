'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import VSLBlack from '@/components/VSLBlack';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { TrafficFilterProvider } from '@/components/TrafficFilterProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentDate, setCurrentDate] = useState('');

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
      <TrafficFilterProvider>
        {(isBlack) => (
          <>
            <Header />
            <NewsTicker />
            <div className="px-6 md:px-8 py-4">
              <div className="flex flex-col items-center py-4">
                <div className="w-full max-w-2xl">
                  <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2 text-left md:text-center">
                    <span className="text-[#B82613]">🚨 Breaking News:</span>
                    <span className="text-black"> The 30-Second Trick Astronauts Use to Eliminate Joint Pain — And Elon Musk Says Can Work in Your Home</span>
                  </h1>
                  <div className="font-bold mb-1 md:text-center text-left">By James Carter – Investigative Health Reporter</div>
                  <div className="text-gray-500 mb-2 text-base md:text-center text-left">
                    Updated 27 minutes ago - {currentDate || 'Fri, June 20, 2025'}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-3xl">
                  {isBlack ? <VSLBlack /> : <VSLWhite />}
                </div>
              </div>
              <ViewerCounter />
              
              {/* Imagens das garrafas - Layout responsivo */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
                {/* Mobile: 6-bottle primeiro, Desktop: 1-bottle primeiro */}
                <div className="order-2 md:order-1 w-full md:w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 esconder">
                  <Link 
                    href="https://www.checkout-ds24.com/product/548372aff=lucasbaierle"
                    className="block w-full md:w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src="/images/1-bottle.png" 
                      alt="Garrafa 1" 
                      width={800} 
                      height={1200} 
                      style={{height: 'auto'}}
                      className="w-full md:w-80"
                      priority
                    />
                  </Link>
                </div>
                
                {/* Mobile: 6-bottle primeiro, Desktop: 6-bottle segundo */}
                <div className="order-1 md:order-2 w-full md:w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 esconder">
                  <Link 
                    href="https://www.checkout-ds24.com/product/548374aff=lucasbaierle"
                    className="block w-full md:w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src="/images/6-bottle.png" 
                      alt="Garrafa 6" 
                      width={800} 
                      height={1200} 
                      style={{height: 'auto'}}
                      className="w-full md:w-80"
                      priority
                    />
                  </Link>
                </div>
                
                {/* Mobile: 3-bottle segundo, Desktop: 3-bottle terceiro */}
                <div className="order-3 md:order-3 w-full md:w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 esconder">
                  <Link 
                    href="https://www.checkout-ds24.com/product/548373aff=lucasbaierle"
                    className="block w-full md:w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src="/images/3-bottle.png" 
                      alt="Garrafa 3" 
                      width={800} 
                      height={1200} 
                      style={{height: 'auto'}}
                      className="w-full md:w-80"
                      priority
                    />
                  </Link>
                </div>
              </div>
              
              {/* Imagem images.webp abaixo das garrafas */}
              <div className="flex justify-center my-8 esconder">
                <Image 
                  src="/images/images.png" 
                  alt="Images" 
                  width={600} 
                  height={400} 
                  style={{height: 'auto'}}
                  className="w-full max-w-2xl"
                />
              </div>
              
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