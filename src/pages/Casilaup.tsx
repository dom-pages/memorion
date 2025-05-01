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

const Casilaup = () => {
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
          <span className="font-bold text-gray-800">Espera... no cierre la pagina!</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
            Multiplica tus resultados con solo un paso adicional:
            <br />
            <span className="text-salud-red">Activa la "Drenagem Turbo 7D"</span> y potencia tu pérdida de peso desde el primer día
          </h1>
          
          <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-4">
            Aunque ya garantizaste tu frasco de Ozempic Natural, la mayoría de nuestros usuarios aceleraron sus resultados combinándolo con la fórmula exclusiva Drenagem Turbo 7D.
          </p>
          
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            Esta fórmula actúa como un drenaje linfático natural, ayudando a eliminar líquidos retenidos, reducir la hinchazón abdominal y activar la quema de grasa estancada.
          </p>
        </div>

        <div className="bg-white border-2 border-dashed border-salud-red rounded-xl p-4 mb-8 shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center text-base font-bold text-gray-400 line-through mb-1">
              <span className="mr-2">💥</span>
              Precio normal: $39
            </div>
            <div className="text-2xl font-bold text-salud-red mb-1">
              <span className="mr-2">🎁</span>
              Hoy solo para nuevos usuarios: $19.90
            </div>
            <div className="text-sm text-gray-600 font-medium mb-4">
              ¡Solo disponible en esta página y por única vez!
            </div>

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

export default Casilaup; 