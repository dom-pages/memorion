"use client";

import Progress from "@/components/Progress";
import HotmartUpsell from "@/components/HotmartUpsell";
import { UTMifyPixel } from "@/components/UTMifyPixel";
import VSLBlackUP1 from "@/components/VSLBlackUP1";

export default function Black() {
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
          <VSLBlackUP1 />
          
          
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );
}

