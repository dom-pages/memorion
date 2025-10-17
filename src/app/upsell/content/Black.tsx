"use client";

import Progress from "@/components/Progress";
import HotmartUpsell from "@/components/HotmartUpsell";
import { UTMifyPixel } from "@/components/UTMifyPixel";
import Script from "next/script";
import { useEffect } from "react";

export default function Black() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/688a95b18d9ea41a82c46b12/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="688a95b18d9ea41a82c46b12"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <UTMifyPixel />
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
          Please do not close or refresh this page, as errors may occur when completing your purchase!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-80">We are processing your payment...</span>
          <Progress progress={67} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          {/* Vídeo ConverteAI */}
          <div className="w-full">
            <div id="vid_688a95b18d9ea41a82c46b12" style={{position: 'relative', width: '100%', padding: '177.77777777777777% 0 0'}}>
              <img 
                id="thumb_688a95b18d9ea41a82c46b12" 
                src="https://images.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/688a95b18d9ea41a82c46b12/thumbnail.jpg" 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} 
                alt="thumbnail" 
              />
              <div 
                id="backdrop_688a95b18d9ea41a82c46b12" 
                style={{
                  WebkitBackdropFilter: 'blur(5px)',
                  backdropFilter: 'blur(5px)',
                  position: 'absolute',
                  top: 0,
                  height: '100%',
                  width: '100%'
                }}
              />
            </div>
          </div>
          
          
          <HotmartUpsell black={true} />
        </div>
      </div>
      <script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        async
        defer
      ></script>
    </>  
  );

};

