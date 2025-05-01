import React from 'react';
import { UTMifyPixel } from '../components/UTMifyPixel';

const Bienvenida = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <UTMifyPixel />
      
      {/* Header com faixa */}
      <div className="bg-green-100 border-b border-green-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-center">
          <span className="text-xl mr-2">✅</span>
          <span className="font-bold text-gray-800">¡Pedido confirmado con éxito!</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="space-y-6">
            {/* Confirmação inicial */}
            <div className="text-center">
              <p className="text-gray-700">
                Gracias por tu compra. En pocos minutos recibirás un correo con todos los detalles y el acceso completo a tu tratamiento.
              </p>
            </div>

            {/* Segurança do pedido */}
            <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">🔒</span>
                <div>
                  <p className="text-gray-700">
                    <strong>Tu pedido está 100% seguro y fue procesado correctamente.</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Revisa tu bandeja de entrada (y también la carpeta de spam o promociones).
                  </p>
                </div>
              </div>
            </div>

            {/* Suporte */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span>📩</span>
                <h2 className="font-medium text-gray-800">¿Necesitas ayuda?</h2>
              </div>
              <p className="text-gray-700">
                Si tienes cualquier duda, problema con el acceso o simplemente quieres hablar con nuestro equipo, contáctanos por correo:
              </p>
              <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-100 text-center">
                <a 
                  href="mailto:fastpilates.apoyo@gmail.com"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                >
                  <span>📧</span>
                  fastpilates.apoyo@gmail.com
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                Respondemos en menos de 24 horas (¡normalmente mucho antes!).
              </p>
            </div>

            {/* Próximos passos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <h2 className="font-medium text-gray-800">Mientras tanto…</h2>
              </div>
              <p className="text-gray-700">
                Recomendamos guardar este correo de soporte y estar atento(a) a tu email en los próximos minutos.
              </p>
            </div>

            {/* Mensagem final */}
            <div className="text-center pt-4">
              <p className="text-gray-700 font-medium">
                ¡Gracias por confiar en nosotros y disfruta de tu transformación!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bienvenida; 