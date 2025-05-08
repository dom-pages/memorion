import React from 'react';
import { UTMifyPixel } from '../components/UTMifyPixel';

const Promo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <UTMifyPixel />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 shadow-sm mb-4">
              <span className="text-lg mr-2">⚠️</span>
              <span className="font-bold text-sm">¡Oferta privada activada!</span>
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight text-center">
            ¡El Protocolo Cero Diabetes está revolucionando la forma de controlar el azúcar en la sangre!
          </h1>
          <p className="text-base text-gray-700 mb-2 font-medium text-left">
            Reduce tus niveles de glucosa de forma natural, segura y sin medicamentos costosos.
          </p>

          {/* Box de oferta */}
          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-salud-red rounded-2xl shadow-lg max-w-xl mx-auto mt-6 mb-6 p-5 sm:p-7 text-left">
            <div className="space-y-2 text-[15px]">
              <div><span className="font-bold text-lg">🎯</span> Has sido seleccionado(a) para acceder al tratamiento natural que ayuda a estabilizar el azúcar y recuperar tu energía.</div>
              <div className="font-bold text-green-700">🟢 OFERTA ESPECIAL HOY</div>
              <div><span className="line-through text-gray-400">Antes: $37</span></div>
              <div className="text-2xl font-bold text-salud-red">Ahora: SOLO $17</div>
              <div className="text-gray-600 font-medium">(Ahorra $20 si actúas ahora mismo)</div>
            </div>
            <div className="mt-5 mb-2">
              <div className="font-semibold text-gray-800 mb-1">Incluye BONOS EXCLUSIVOS:</div>
              <ul className="list-none pl-0 space-y-1">
                <li>✅ Lista de alimentos que regulan la glucosa</li>
                <li>✅ Guía de ejercicios para acelerar resultados</li>
                <li>✅ Recetas dulces sin picos de azúcar</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-[15px]">
              <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">🧠 Resultados en menos de 14 días</span>
              <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">🌿 100% natural y sin efectos secundarios</span>
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">📊 Respaldado por miles de casos reales</span>
            </div>
          </div>

          <p className="text-base text-gray-800 mt-6 mb-3 font-medium text-left">
            ¿Quieres equilibrar tu salud y recuperar el control sin pastillas ni inyecciones?<br />
            <span className="font-bold text-salud-red">Toca abajo y accede ahora mientras esté disponible.</span>
          </p>
        </div>
        <div className="text-center mt-6">
          <a 
            href="https://pay.hotmart.com/V99520801N?off=esebil5f&checkoutMode=10"
            className="inline-block w-full max-w-md bg-gradient-to-r from-salud-red to-red-600 hover:from-red-600 hover:to-salud-red text-white font-bold py-4 px-4 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl border-4 border-white"
          >
            QUIERO CONTROLAR MI DIABETES DE FORMA NATURAL
          </a>
        </div>
      </main>
    </div>
  );
};

export default Promo; 