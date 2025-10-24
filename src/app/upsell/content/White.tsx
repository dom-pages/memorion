'use client';

import React from 'react';
import HotmartUpsell from '@/components/HotmartUpsell';
import { UTMifyPixel } from '@/components/UTMifyPixel';

export default function White() {
  return (
    <>
      <UTMifyPixel />
      <div className="max-w-6xl mx-auto px-5">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-12 md:p-16 text-white mb-10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Manual de Nutrición Interior
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-5 opacity-95">
            Nutrición Natural para el Bienestar Nervioso
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Descubre cómo alimentos y nutrientes específicos pueden apoyar naturalmente la salud de tu sistema nervioso. Una guía práctica basada en principios nutricionales para mejorar tu bienestar desde adentro.
          </p>
        </div>

        {/* Qué Incluye */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Qué Incluye</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">🥗</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Nutrición Específica</h3>
            <p className="text-gray-600 text-sm">
              Alimentos diseñados para apoyar el sistema nervioso de forma natural
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Enfoque Integral</h3>
            <p className="text-gray-600 text-sm">
              Estrategias nutricionales para mejorar el bienestar general
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Guías Prácticas</h3>
            <p className="text-gray-600 text-sm">
              Planes de alimentación fáciles de seguir en tu rutina diaria
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Bienestar Natural</h3>
            <p className="text-gray-600 text-sm">
              Mejora tu calidad de vida con nutrición consciente
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl p-9 mb-10 shadow-lg">
          <p className="mb-6 text-gray-700">
            Bienvenido al <strong>Manual de Nutrición Interior</strong>, un programa educativo basado en nutrición natural para apoyar la salud del sistema nervioso.
          </p>
          
          <h3 className="text-2xl font-bold mb-5 text-gray-800">¿Qué es la Nutrición Interior?</h3>
          <p className="text-gray-700 mb-8">
            La nutrición interior es un enfoque que utiliza alimentos específicos y nutrientes para apoyar naturalmente el funcionamiento óptimo del sistema nervioso y promover el bienestar general.
          </p>
          
          <h3 className="text-2xl font-bold mb-5 text-gray-800">Beneficios Potenciales</h3>
          
          <ul className="space-y-4 mb-8">
            <li className="py-4 border-b border-gray-200 last:border-b-0">
              <h4 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span> Apoyo al Sistema Nervioso
              </h4>
              <p className="text-gray-600 ml-8 text-sm">
                Nutrientes específicos que pueden contribuir al funcionamiento saludable del sistema nervioso.
              </p>
            </li>
            <li className="py-4 border-b border-gray-200 last:border-b-0">
              <h4 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span> Mejor Bienestar General
              </h4>
              <p className="text-gray-600 ml-8 text-sm">
                Una alimentación balanceada puede ayudar a mejorar tu sensación de bienestar diario.
              </p>
            </li>
            <li className="py-4 border-b border-gray-200 last:border-b-0">
              <h4 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span> Enfoque Preventivo
              </h4>
              <p className="text-gray-600 ml-8 text-sm">
                La nutrición adecuada puede ser parte importante del cuidado integral de la salud.
              </p>
            </li>
            <li className="py-4 border-b border-gray-200 last:border-b-0">
              <h4 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span> Hábitos Sostenibles
              </h4>
              <p className="text-gray-600 ml-8 text-sm">
                Aprende a incorporar alimentos beneficiosos de manera práctica y sostenible.
              </p>
            </li>
            <li className="py-4 border-b border-gray-200 last:border-b-0">
              <h4 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span> Calidad de Vida
              </h4>
              <p className="text-gray-600 ml-8 text-sm">
                Los usuarios reportan mejor calidad de vida al implementar estos principios nutricionales.
              </p>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <p className="text-yellow-800">
            <strong className="text-yellow-900">Importante:</strong> El Manual de Nutrición Interior es una herramienta educativa complementaria. No reemplaza el tratamiento médico profesional. Si experimentas dolor nervioso, molestias crónicas o cualquier condición de salud, consulta a un profesional de la salud.
          </p>
        </div>

        {/* Testimonial */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-8 italic">
          <p className="text-blue-800 text-lg mb-4">
            "Desde que comencé a seguir las recomendaciones del manual, me siento mejor en mi día a día. Es un enfoque simple pero efectivo para cuidar mi bienestar desde la alimentación."
          </p>
          <span className="text-blue-900 font-semibold not-italic">- Carmen R.</span>
        </div>

        {/* Guarantee */}
        <div className="bg-green-100 border-2 border-green-500 p-8 rounded-2xl text-center mb-8">
          <h3 className="text-green-800 text-2xl font-bold mb-3">✓ 100% Garantía - 90 Días</h3>
          <p className="text-green-700 text-lg">Si no estás satisfecho, reembolsamos tu inversión completa.</p>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm py-8">
          Contenido educativo. Este producto no reemplaza atención médica profesional. Consulta a un profesional de la salud para su uso.
        </p>

        {/* Hotmart Upsell */}
        <div className="mt-8">
          <HotmartUpsell black={false} />
        </div>
      </div>
    </>
  );
}