import React from 'react';
import { UTMifyPixel } from '../components/UTMifyPixel';

const Promo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <UTMifyPixel />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 shadow-sm mb-4">
            <span className="text-lg mr-2">⚠️</span>
            <span className="font-bold text-sm">¡Oferta privada activada!</span>
          </div>
          
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
            Ozempic Natural está sorprendiendo a todos:
            <br />
            <span className="text-salud-red">Pierde hasta 9 kg en solo 14 días</span> — sin agujas, sin efectos secundarios
          </h1>
          
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            Has sido seleccionado(a) para acceder al tratamiento natural que imita los efectos del Ozempic de forma 100% segura y sin receta.
          </p>
        </div>

        <div className="bg-white border-2 border-dashed border-salud-red rounded-xl p-4 mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-2 -mr-2">
            <div className="bg-gradient-to-r from-salud-red to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-sm">
              ¡OFERTA ESPECIAL!
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="text-base font-bold text-gray-400 line-through mb-1">
              Antes: $27
            </div>
            <div className="text-2xl font-bold text-salud-red mb-1">
              Hoy con descuento exclusivo: SOLO $17
            </div>
            <div className="text-sm text-gray-600 font-medium">
              (Ahorra $10 si decides ahora mismo)
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex items-center bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg">
              <span className="text-lg mr-2">🎯</span>
              <span className="font-medium">Resultados visibles en menos de 2 semanas</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg">
              <span className="text-lg mr-2">🌿</span>
              <span className="font-medium">Fórmula natural, sin químicos agresivos</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg">
              <span className="text-lg mr-2">💥</span>
              <span className="font-medium">Más de 48 mil personas ya lo probaron</span>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-red-100 text-red-600 px-3 py-1.5 rounded-full font-bold text-xs">
              <span className="text-base mr-1.5">⏰</span>
              Advertencia: esta promoción desaparece en minutos.
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base text-gray-800 mb-3 font-medium">
            👉 Toca el botón y empieza tu cambio ahora:
          </p>
          <button className="w-full max-w-md bg-gradient-to-r from-salud-red to-red-600 hover:from-red-600 hover:to-salud-red text-white font-bold py-3 px-4 rounded-lg text-base transition-all transform hover:scale-105 shadow-lg">
            QUIERO BAJAR DE PESO DE FORMA NATURAL
          </button>
        </div>
      </main>
    </div>
  );
};

export default Promo; 