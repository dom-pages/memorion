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
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
            ¿Te pareció caro? Está bien... pero no te vayas sin esto.
            <br />
            <span className="text-salud-red">Prueba la versión ESENCIAL de la Drenagem Turbo 7D</span> por solo $9.90
          </h1>
          
          <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-6">
            Sabemos que no siempre es posible adquirir todo de inmediato.
            Por eso, queremos ofrecerte una versión reducida pero igual de efectiva para empezar:
            Drenagem Turbo 7D – Fórmula Esencial, ideal para quienes están comenzando y quieren ver resultados rápidos sin gastar mucho.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-gray-50/50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-500 text-xs">✅</span>
                <span className="text-gray-700 text-xs">Ayuda a deshinchar</span>
              </div>
            </div>
            
            <div className="bg-gray-50/50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-500 text-xs">✅</span>
                <span className="text-gray-700 text-xs">Elimina líquidos retenidos</span>
              </div>
            </div>
            
            <div className="bg-gray-50/50 rounded-lg p-3 border border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-500 text-xs">✅</span>
                <span className="text-gray-700 text-xs">Complemento perfecto al Ozempic Natural</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-dashed border-salud-red rounded-xl p-4 mb-8 shadow-lg">
          <div className="text-center">
            <p className="text-base text-gray-800 mb-3 font-medium">
              👉 Toca el botón para añadirlo a tu pedido ahora mismo:
            </p>
            
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