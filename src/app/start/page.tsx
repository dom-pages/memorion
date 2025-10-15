'use client';

import React, { useEffect, useState, useCallback } from 'react';
import VSLBlackAB from '@/components/VSLBlackAB';
import VSLWhite from '@/components/VSLWhite';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import CommentSection from '@/components/CommentSection';
import { useSearchParams } from 'next/navigation';
import { CheckCheck, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  const { isBlack } = useTraffic();
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const searchParams = useSearchParams();
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
        const storedVideoTime = Number(localStorage.getItem('689e11961016d6bdb6f4a765'));
        
        if (storedVideoTime > 2896) {
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [visible]);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        window.location.href = appendSearchParams("https://pay.hotmart.com/D102425253L");
      }, 1000);
    }, 2000);
  };

  return (
    <main>
      <UTMifyPixel />
      <div className="px-6 md:px-8 py-4 flex flex-col min-h-screen">
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-3xl mx-auto text-center">
            {isBlack ? <VSLBlackAB /> : <VSLWhite />}
          </div>
        </div>
        
        {visible && isBlack && (
          <div className="flex w-full justify-center items-center flex-1">
            <div className="flex w-full max-w-sm flex-col justify-center items-center text-center gap-6">
              <Card className="w-full max-w-sm mx-auto bg-gradient-to-br from-gray-800 to-black text-white rounded-xl shadow-lg overflow-hidden">
                <CardHeader className="text-center p-6">
                  <CardTitle className="text-3xl font-extrabold text-green-400 mb-2">
                    🎉 ¡Felicidades! ¡Ganaste una sorpresa! 🎁
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    ¡Haga clic en el botón verde a continuación y recíbela de inmediato!
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button
                    className={cn(
                      "w-full py-3 text-lg font-bold rounded-lg transition-all duration-300",
                      isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                    )}
                    onClick={handleButtonClick}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Procesando...
                      </span>
                    ) : showSuccess ? (
                      <span className="flex items-center justify-center">
                        <CheckCheck className="mr-2 h-5 w-5" />
                        ¡Éxito! Redireccionando...
                      </span>
                    ) : (
                      "¡QUIERO RECIBIR MI SORPRESA AHORA!"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        <CommentSection />
      </div>
    </main>
  );
}