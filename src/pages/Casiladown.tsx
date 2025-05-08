import React, { useEffect } from 'react';
import { UTMifyPixel } from '../components/UTMifyPixel';

// Declaração de tipo para o objeto checkoutElements
declare global {
  interface Window {
    checkoutElements: {
      init: (type: string) => {
        mount: (selector: string) => void;
      };
    };
  }
}

const Casiladown = () => {
  useEffect(() => {
    // Carrega o script do Hotmart
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    document.head.appendChild(script);

    // Inicializa o checkout do Hotmart
    script.onload = () => {
      if (window.checkoutElements) {
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <UTMifyPixel />
      
      {/* Header com faixa */}
      <div className="bg-yellow-100 border-b border-yellow-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-center">
          <span className="text-xl mr-2">⚠️</span>
          <span className="font-bold text-gray-800">Última oportunidad antes de cerrar tu pedido</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight text-center">
            ¿Te pareció caro? Lo entendemos… pero no te vayas sin esto.<br />
            <span className="text-salud-red">Prueba la versión ESENCIAL del Drenaje Turbo 7D por solo $9.90</span>
          </h1>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-4 text-left">
            Sabemos que no siempre es posible adquirir todo de inmediato. Por eso creamos esta opción accesible:<br />
            <span className="font-bold">Drenaje Turbo 7D – Fórmula Esencial</span><br />
            Ideal para quienes están empezando con el protocolo Azúcar Bajo Control y quieren sentir una mejora visible sin gastar mucho.
          </p>
          <ul className="list-none pl-0 space-y-1 text-[15px] mb-4 text-left max-w-2xl mx-auto">
            <li>✅ Ayuda a reducir la hinchazón</li>
            <li>✅ Elimina líquidos retenidos</li>
            <li>✅ Complemento perfecto al Azúcar Bajo Control</li>
          </ul>
          <p className="text-base text-gray-800 font-medium text-left max-w-2xl mx-auto">
            👉 Toca el botón para añadirlo a tu pedido ahora mismo y no perder esta oportunidad única.
          </p>
        </div>
        <div className="bg-white border-2 border-dashed border-salud-red rounded-xl p-4 mb-8 shadow-lg">
          <div className="text-center">
            {/* Container do Hotmart */}
            <div className="overflow-hidden">
              <div id="hotmart-sales-funnel" className="w-full" style={{ maxWidth: '100%' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Casiladown; 