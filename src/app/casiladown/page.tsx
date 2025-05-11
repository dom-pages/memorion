'use client';

import React, { useEffect } from 'react';

export default function CasilaDown() {
  useEffect(() => {
    // Carrega o script do Hotmart
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.checkoutElements?.init('salesFunnel').mount('#hotmart-sales-funnel');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-[720px] mx-auto font-['Helvetica_Neue'] p-6 box-border">
      {/* Header de alerta */}
      <div className="bg-yellow-100 text-yellow-800 p-5 text-center text-[22px] rounded-xl font-bold mb-8">
        ⚠️ Última oportunidad antes de cerrar tu pedido
      </div>

      {/* Texto principal */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">
          ¿Te pareció caro? Lo entendemos… pero no te vayas sin esto.
        </h1>
        <p className="text-xl font-bold text-green-600 mb-4">
          Prueba la versión ESENCIAL del Drenaje Turbo 7D por solo $9.90
        </p>
        <p className="text-base text-gray-700 mb-4">
          Sabemos que no siempre es posible adquirir todo de inmediato. Por eso creamos esta opción accesible:
        </p>
        <p className="text-lg font-bold mb-2">
          Drenaje Turbo 7D – Fórmula Esencial
        </p>
        <p className="text-base text-gray-700">
          Ideal para quienes están empezando con el protocolo Azúcar Bajo Control y quieren sentir una mejora visible sin gastar mucho.
        </p>
      </div>

      {/* Benefícios */}
      <div className="mb-8">
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="text-green-600">✅</span>
            <span>Ayuda a reducir la hinchazón</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✅</span>
            <span>Elimina líquidos retenidos</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✅</span>
            <span>Complemento perfecto al Azúcar Bajo Control</span>
          </li>
        </ul>
        <p className="text-lg mt-4">
          👉 Toca el botón para añadirlo a tu pedido ahora mismo y no perder esta oportunidad única.
        </p>
      </div>

      {/* Box de oferta */}
      <div className="border-2 border-dashed border-red-800 rounded-xl p-6 mb-8">
        {/* Widget do Hotmart */}
        <div id="hotmart-sales-funnel"></div>
      </div>
    </div>
  );
} 