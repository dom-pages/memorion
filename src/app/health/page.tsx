'use client';

import React, { useEffect, useState, useCallback } from 'react';
import NewsTicker from '@/components/NewsTicker';
import VSLBlackV3 from '@/components/VSLBlackV3';
import VSLBlackAB from '@/components/VSLBlackAB';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';
import { useSearchParams } from 'next/navigation';

export default function Health() {
  const { isBlack } = useTraffic();
  const [visible, setVisible] = useState(false);
  
  const searchParams = useSearchParams();
  const hasParams = searchParams.toString().length > 0;
  
  const appendSearchParams = useCallback(
    (baseUrl: string) => {
      const queryString = searchParams.toString();
      if (!queryString) return baseUrl;
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}${queryString}`;
    },
    [searchParams]
  );

  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedVideoTime = Number(localStorage.getItem('68800fbf9d7a9adf0db95832'));
        
        if (storedVideoTime > 864000) { // 10 dias = 864000 segundos
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [visible]);

  return (
    <main>
      <UTMifyPixel />
      
      {/* Mostrar NewsTicker apenas para páginas BLACK */}
      {isBlack && <NewsTicker />}
      
      <div className="px-6 md:px-8 py-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            {isBlack ? (hasParams ? <VSLBlackAB /> : <VSLBlackV3 />) : <VSLWhite />}
          </div>
        </div>
        
        {/* Mostrar ViewerCounter e ofertas apenas para páginas BLACK */}
        {isBlack && <ViewerCounter />}
        
        {/* GARRAFAS E GARANTIA DESATIVADAS - NÃO VAI APARECER */}
        {/* {isBlack && visible && (
          <div className="w-full flex flex-col items-center my-8"> 
            <div className="flex flex-col md:flex-row justify-center items-end gap-6 w-full max-w-4xl mx-auto">
              <div id="bottle-6" className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div
                  className="block w-full md:w-auto cursor-pointer"
                  onClick={() => {
                    const link6 = appendSearchParams('https://sugardeletepay.store/checkout/186016669:1?afid=2NyvmUydD6')
                    window.location.href = link6
                  }}
                >
                  <Image 
                    src="/images/6-bottle.png" 
                    alt="Garrafa 6" 
                    width={800} 
                    height={1200} 
                    style={{height: 'auto', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
                    className="w-full md:w-60 object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div
                  className="block w-full md:w-auto cursor-pointer"
                  onClick={() => {
                    const link3 = appendSearchParams('https://sugardeletepay.store/checkout/190301606:1?afid=zQq54rWJGr')
                    window.location.href = link3
                  }}
                >
                  <Image 
                    src="/images/3-bottle.png" 
                    alt="Garrafa 3" 
                    width={800} 
                    height={1200} 
                    style={{height: 'auto', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
                    className="w-full md:w-60 object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div
                  className="block w-full md:w-auto cursor-pointer"
                  onClick={() => {
                    const link2 = appendSearchParams('https://sugardeletepay.store/checkout/186016667:1?afid=0cOqJQV2DU')
                    window.location.href = link2
                  }}
                >
                  <Image 
                    src="/images/2-bottle.png" 
                    alt="Garrafa 2" 
                    width={800} 
                    height={1200} 
                    style={{height: 'auto', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
                    className="w-full md:w-60 object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
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
            
            <div className="flex flex-col items-center text-center gap-4 w-full max-w-2xl mx-auto">
              <p className="text-base md:text-lg">
                Still not sure? Remember, <b>Block Sugar</b> comes with a <b>100% Money-Back Guarantee for a full 180 days!</b>
              </p>
              <div className="text-[#B82613] text-lg font-bold">Limited Time Offer</div>
              <a href="#bottle-6" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-md">
                YES! I Want Block Sugar
              </a>
            </div>
          </div>
        )} */}
        
        {/* Mostrar comentários apenas para páginas BLACK */}
        {isBlack && <CommentSection />}
      </div>
    </main>
  );
}