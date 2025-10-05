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
import { CheckCheck, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


export default function Home() {
  const { isBlack } = useTraffic();
  const [currentDate, setCurrentDate] = useState('');
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  
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

  const bottles = [
    {
      link: "https://enduroxprime.mycartpanda.com/checkout/193604943:1?afid=B2NBmpBD6J",
      title: "6 BOTTLES",
      image: "/memomaster-6-bottles.png",
      priceTo: 294,
      priceFrom: 1074,
      highlight: true,
      imageWidth: 300,
      imageHeight: 300,
      description: "180 DAY SUPPLY",
      benefits: [
        "YOU SAVE $780",
        "FREE SHIPPING",
        "60 DAYS GUARANTEE",
      ]
    },
    {
      link: "https://enduroxprime.mycartpanda.com/checkout/193604942:1?afid=B2NBmpBD6J",
      title: "3 BOTTLES",
      image: "/memomaster-3-bottles.png",
      priceTo: 217,
      priceFrom: 577,
      highlight: false,
      imageWidth: 200,
      imageHeight: 200,
      description: "90 DAY SUPPLY",
      benefits: [
        "YOU SAVE $360",
        "FREE SHIPPING",
        "60 DAYS GUARANTEE",
      ]
    },
    {
      link: "https://enduroxprime.mycartpanda.com/checkout/193604941:1?afid=B2NBmpBD6J",
      title: "2 BOTTLES",
      image: "/memomaster-2-bottles.png",
      priceTo: 177,
      priceFrom: 377,
      highlight: false,
      imageWidth: 150,
      imageHeight: 150,
      description: "60 DAY SUPPLY",
      benefits: [
        "YOU SAVE $200",
        "60 DAYS GUARANTEE",
      ]
    },
  ];

  // Monitora o tempo do vídeo e controla visibilidade dos cards
  useEffect(() => {
    if (!visible) {
        const intervalId = setInterval(() => {
          // Verifica o localStorage baseado no vídeo que está sendo exibido
          const videoId = '68e04eb01a53f5891f920fce';
          let storedVideoTime = Number(localStorage.getItem(videoId));
          
          // Se não encontrou o tempo no ID esperado, tenta encontrar em outras chaves
          if (storedVideoTime === 0 || isNaN(storedVideoTime)) {
            const allKeys = Object.keys(localStorage);
            const videoKeys = allKeys.filter(key => key.includes('68'));
            
            for (const key of videoKeys) {
              const time = Number(localStorage.getItem(key));
              if (time > 0 && !isNaN(time)) {
                storedVideoTime = time;
                break;
              }
            }
          }
        
        if (storedVideoTime > 1951) { // 32:31 minutos (1951 segundos)
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [visible, isBlack]);

  return (
    <main>
      <UTMifyPixel />
        {/* <Header /> */}
        {/* <NewsTicker /> */}
        <div className="px-6 md:px-8 py-4 flex flex-col min-h-screen">
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

          {/* Centralizar logos */}
          <div className="flex justify-center my-8 w-full">
            <Image src="/images/news-logos.webp" alt="Logos" width={600} height={80} style={{height: 'auto'}} className="mx-auto" />
          </div>
          
          {visible && isBlack && (
        <div className="flex w-full justify-center items-center flex-1">
          <div className="flex w-full max-w-sm flex-col justify-center items-center text-center gap-6">
          {bottles.map((bottle) => (
            <a
              href={appendSearchParams(bottle.link)}
              key={bottle.title}
              onClick={(e) => {
                e.preventDefault();
                setActive(true);
                const finalUrl = appendSearchParams(bottle.link);
                window.open(finalUrl, '_blank');
              }}
              className="w-full"
            >
              <Card className={cn("w-full rounded-2xl overflow-hidden relative p-3", bottle.highlight && "border-sky-600")}>
                {bottle.highlight && (
                  <div className="absolute top-5 -right-12 rotate-45 px-12 py-2 bg-sky-600 text-white">
                    <span className="text-sm font-bold">
                      BEST VALUE!
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl font-bold p-0">
                    {bottle.title}
                  </CardTitle>
                  <CardDescription>
                    {bottle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 p-2">
                  <Image
                    src={bottle.image}
                    alt={bottle.title}
                    width={bottle.imageWidth}
                    height={bottle.imageHeight}
                    className="mx-auto"
                  />
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                    {bottle.benefits.map((benefit) => (
                      <div key={benefit} className="flex justify-center items-center gap-2 text-center leading-none rounded-lg px-3 py-2 bg-sky-900/20">
                        <CheckCheck
                          strokeWidth={2}
                          className="size-5 flex-none"
                        />
                        <span className="">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                    <span className="text-sm line-through text-gray-400">
                      From US$ {bottle.priceFrom} for only
                    </span>
                    <span className="text-4xl font-bold tracking-tighter leading-none text-green-500">
                      US$ {bottle.priceTo}<span className="tracking-normal text-2xl ml-0.5">.00</span>
                    </span>
                  </div>
                  <Button
                    onClick={() => {
                      setActive(true);
                      const finalUrl = appendSearchParams(bottle.link);
                      window.open(finalUrl, '_blank');
                    }}
                    disabled={active}
                    className="w-full font-bold text-lg border-b-8 px-8 py-7 pulse text-white bg-green-500 border-green-600 hover:bg-green-500 active:bg-green-700"
                  >
                    {active ? (
                      <Loader2
                        strokeWidth={3}
                        className="size-10 flex-none animate-spin"
                      />
                    ):(
                      <CheckCheck
                        strokeWidth={3}
                        className="size-14 flex-none"
                      />
                    )}
                      <span>BUY NOW</span>
                  </Button>
                  <Image
                    src="/payment-icons.svg"
                    alt="Secure Checkout"
                    width={120}
                    height={120}
                    className="mx-auto !mt-4"
                    title="Secure Checkout"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
          </div>
        </div>
      )}
          {/* Seção de comentários */}
          {/* <CommentSection /> */}
        </div>
    </main>
  );
} 