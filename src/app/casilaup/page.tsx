'use client';

import React, { useEffect } from 'react';

export default function CasilaUp() {
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
        ⚠️ Espera... no cierre la pagina!
      </div>

      {/* Texto principal */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Multiplica tus resultados con un solo paso adicional:
        </h1>
        <p className="text-lg mb-4">
          Activa el "Drenaje Turbo 7D" y acelera el equilibrio de tu metabolismo desde el primer día.
        </p>
        <p className="text-base text-gray-700">
          Aunque ya aseguraste tu acceso al protocolo Mounjaro Natural, la mayoría de nuestros usuarios han conseguido resultados más rápidos y sensación de ligereza inmediata al combinarlo con la fórmula exclusiva Drenaje Turbo 7D.
        </p>
      </div>

      {/* Benefícios */}
      <div className="mb-8">
        <p className="text-lg mb-4">Este drenaje natural ayuda a:</p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <span>Eliminar líquidos retenidos</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">🥵</span>
            <span>Reducir la hinchazón abdominal</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span>Activar la desinflamación metabólica que impide controlar el azúcar correctamente</span>
          </li>
        </ul>
      </div>

      {/* Box de oferta */}
      <div className="border-2 border-dashed border-red-800 rounded-xl p-6 mb-8">
        <div className="text-center mb-6">
          <p className="text-xl mb-2">💥 Precio regular: $99.90</p>
          <p className="text-2xl font-bold text-green-600 mb-2">🎁 HOY solo para nuevos usuarios: $19.90</p>
          <p className="text-red-800 font-bold mb-4">🛑 Oferta única, disponible únicamente en esta página</p>
          <p className="text-lg">👉 Toca el botón para añadirlo a tu pedido ahora mismo y comenzar más liviano(a)</p>
        </div>

        {/* Widget do Hotmart */}
        <div id="hotmart-sales-funnel"></div>
      </div>
    </div>
  );
} 