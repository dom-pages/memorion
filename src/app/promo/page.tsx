'use client';

import React from 'react';

export default function PromoPage() {
  return (
    <div className="max-w-[720px] mx-auto font-['Helvetica_Neue'] p-6 box-border">
      {/* Cabeçalho de urgência */}
      <div className="bg-red-100 text-red-800 p-5 text-center text-[22px] rounded-xl font-bold">
        ¡NO CIERRES ESTA PÁGINA!<br />
        <span className="text-base font-normal">Has sido seleccionado para recibir un <strong>DESCUENTO ESPECIAL del 40%</strong></span>
      </div>

      {/* Título e oferta */}
      <div className="text-center mt-7">
        <h2 className="text-[28px] text-green-800 mb-2">Plan Mounjaro Natural</h2>
        <p className="text-lg mb-2">Elimina hasta 12 kg en 21 días sin dietas extremas ni gimnasio.</p>
        <p className="text-xl">
          <span className="line-through text-gray-500">$27</span>
          <strong className="text-green-600"> HOY: $17.00</strong>
        </p>
      </div>

      {/* Benefícios em boxes */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          🧠 Energía y claridad mental
        </div>
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          🥦 Menos hinchazón abdominal
        </div>
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          💥 Quema de grasa atrapada
        </div>
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          🛑 Menos ansiedad y más control
        </div>
      </div>

      {/* Bloco de bônus */}
      <div className="bg-lime-100 border-l-4 border-lime-600 p-4 rounded-xl text-[15px] mt-8">
        <strong>🎁 Tus BONOS EXCLUSIVOS incluyen:</strong>
        <ul className="mt-2 pl-5">
          <li>✅ Cómo activar el "modo quema de grasa" en 10 minutos</li>
          <li>✅ El error que bloquea tu metabolismo</li>
          <li>✅ Ingredientes naturales que reducen inflamación</li>
          <li>✅ Recetas rápidas de apoyo</li>
          <li>✅ Guía de control del apetito emocional</li>
          <li>✅ Mini-desafío de 3 días para acelerar resultados</li>
        </ul>
      </div>

      {/* Botão de ação */}
      <a 
        href="https://pay.hotmart.com/V99520801N?off=z3pusn5m&checkoutMode=10"
        className="bg-green-800 text-white py-4 px-8 text-lg font-bold rounded-lg text-center mx-auto mt-8 block w-full max-w-[360px] no-underline"
      >
        👉 QUIERO ADQUIRIR EL PLAN AHORA
      </a>
    </div>
  );
} 