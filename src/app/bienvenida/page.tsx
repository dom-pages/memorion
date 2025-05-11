'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export default function Bienvenida() {
  return (
    <main>
      <div className="w-full bg-green-600 text-white py-4 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">
            ✅ ¡Pedido confirmado con éxito!
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <p className="text-gray-700">
            Gracias por tu compra. En pocos minutos recibirás un correo con todos los detalles y el acceso completo a tu tratamiento.
          </p>

          <div className="flex items-start space-x-3">
            <span className="text-[#B82613] text-xl">🔒</span>
            <p className="text-gray-700">
              Tu pedido está 100% seguro y fue procesado correctamente.
            </p>
          </div>

          <p className="text-gray-700">
            Revisa tu bandeja de entrada (y también la carpeta de spam o promociones).
          </p>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="mr-2" />
              ¿Necesitas ayuda?
            </h2>
            <p className="text-gray-700 mb-4">
              Si tienes cualquier duda, problema con el acceso o simplemente quieres hablar con nuestro equipo, contáctanos por correo:
            </p>
            <a 
              href="mailto:fastpilates.apoyo@gmail.com"
              className="text-[#B82613] hover:underline block mb-2"
            >
              📧 fastpilates.apoyo@gmail.com
            </a>
            <p className="text-gray-600 text-sm">
              Respondemos en menos de 24 horas (¡normalmente mucho antes!).
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold mb-4">🎯 Mientras tanto…</h2>
            <p className="text-gray-700">
              Recomendamos guardar este correo de suporte y estar atento(a) a tu email en los próximos minutos.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium">
              ¡Gracias por confiar en nosotros y disfruta de tu transformación!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 