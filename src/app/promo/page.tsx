'use client';

import React from 'react';

export default function PromoPage() {
  return (
    <div className="max-w-[720px] mx-auto font-['Helvetica_Neue'] p-6 box-border">
      {/* Cabeçalho de urgência */}
      <div className="bg-red-100 text-red-800 p-5 text-center text-[22px] rounded-xl font-bold">
        ⚠️ DON'T LEAVE THIS PAGE! ⚠️<br />
        <span className="text-base font-normal">You've been selected for <strong>LIFE-CHANGING RESULTS</strong> in the next 30 days!</span>
      </div>

      {/* Título e oferta */}
      <div className="text-center mt-7">
        <h2 className="text-[28px] text-green-800 mb-2">Pure Light - Transform Your Life</h2>
        <p className="text-lg mb-2">Make $10,000+ in 30 days • Attract your soulmate • Heal your body • Unlimited abundance!</p>
        <p className="text-xl">
          <span className="line-through text-gray-500">$297</span>
          <strong className="text-green-600"> TODAY ONLY: $19.00</strong>
        </p>
        <p className="text-sm text-red-600 font-bold mt-2">⏰ OFFER EXPIRES IN 24 HOURS!</p>
      </div>

      {/* Benefícios agressivos */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          💰 Make $10,000+ in 30 days
        </div>
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          💕 Attract your soulmate in 21 days
        </div>
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          🏥 Heal your body naturally
        </div>
        <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 text-center">
          🚀 Unlimited abundance & success
        </div>
      </div>

      {/* Bloco de bônus agressivo */}
      <div className="bg-lime-100 border-l-4 border-lime-600 p-4 rounded-xl text-[15px] mt-8">
        <strong>🔥 GUARANTEED LIFE TRANSFORMATION INCLUDED: 🔥</strong>
        <ul className="mt-2 pl-5">
          <li>✅ Make $10,000+ in 30 days blueprint</li>
          <li>✅ Attract your perfect partner formula</li>
          <li>✅ Heal any disease naturally</li>
          <li>✅ Unlimited money attraction system</li>
          <li>✅ Complete life transformation guide</li>
          <li>✅ 30-day money-back guarantee</li>
        </ul>
      </div>

      {/* Botão de ação */}
      <a 
        href="https://pay.hotmart.com/D102425253L?off=1tynf7vu"
        className="bg-green-800 text-white py-4 px-8 text-lg font-bold rounded-lg text-center mx-auto mt-8 block w-full max-w-[360px] no-underline"
      >
        🚀 YES! TRANSFORM MY LIFE NOW!
      </a>
    </div>
  );
} 