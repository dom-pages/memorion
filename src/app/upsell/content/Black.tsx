"use client";

import Progress from "@/components/Progress";
import HotmartUpsell from "@/components/HotmartUpsell";
import { UTMifyPixel } from "@/components/UTMifyPixel";

export default function Black() {
  return (
    <>
      <UTMifyPixel />
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
              ¡Por favor no cierres ni actualices esta página, ya que pueden ocurrir errores al completar tu compra!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-80">Estamos procesando tu pago...</span>
          <Progress progress={67} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          {/* Texto principal */}
          <div className="w-full bg-white rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Recibe el Protocolo de Máxima Absorción para garantizar que tu cuerpo trabaje hasta 10x más rápido y acelere el combate natural contra la neuropatía.
            </h2>
          </div>
          
          
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );
}

