'use client';

import React from 'react';
import HotmartUpsell from '@/components/HotmartUpsell';
import { UTMifyPixel } from '@/components/UTMifyPixel';

export default function White() {
  return (
    <>
      <UTMifyPixel />
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 px-10 text-center">
          <div className="absolute -top-1/2 -right-1/5 w-96 h-96 bg-white bg-opacity-10 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 relative z-10">
            Manual de Prevención Nutricional
          </h1>
          <h2 className="text-2xl md:text-3xl font-normal mb-6 opacity-95 relative z-10">
            Prevención y Bienestar desde la Alimentación
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto relative z-10">
            Aprende estrategias nutricionales preventivas basadas en evidencia para fortalecer tu salud y reducir riesgos. Una guía completa para construir hábitos alimenticios que protejan tu bienestar a largo plazo.
          </p>
        </div>

        {/* Content Section */}
        <div className="py-16 px-10">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Qué Incluye</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-9 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">
              <span className="text-5xl mb-5 block">🛡️</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Enfoque Preventivo</h3>
              <p className="text-gray-600 leading-relaxed">
                Estrategias nutricionales diseñadas para prevenir y proteger tu salud
              </p>
            </div>
            
            <div className="bg-gray-50 p-9 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">
              <span className="text-5xl mb-5 block">🥬</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Nutrición Basada en Evidencia</h3>
              <p className="text-gray-600 leading-relaxed">
                Principios alimenticios respaldados por la ciencia nutricional
              </p>
            </div>
            
            <div className="bg-gray-50 p-9 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">
              <span className="text-5xl mb-5 block">📊</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Planes Personalizables</h3>
              <p className="text-gray-600 leading-relaxed">
                Guías adaptables a diferentes necesidades y estilos de vida
              </p>
            </div>
            
            <div className="bg-gray-50 p-9 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">
              <span className="text-5xl mb-5 block">🌱</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Salud a Largo Plazo</h3>
              <p className="text-gray-600 leading-relaxed">
                Construye hábitos sostenibles para tu bienestar futuro
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white py-12 px-10">
          <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
            Bienvenido al <strong className="text-gray-800 font-semibold">Manual de Prevención Nutricional</strong>, una guía educativa completa que te enseña cómo la alimentación puede ser tu mejor herramienta de prevención.
          </p>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-5 text-gray-800">¿Qué es la Prevención Nutricional?</h3>
            <p className="text-lg text-gray-600 mb-9 leading-relaxed">
              La prevención nutricional es un enfoque proactivo que utiliza la alimentación estratégica para reducir riesgos de salud, fortalecer el sistema inmunológico y promover el bienestar integral antes de que aparezcan problemas.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-5 text-gray-800">Beneficios del Enfoque Preventivo</h3>
            
            <ul className="space-y-0">
              <li className="py-8 border-b border-gray-200 last:border-b-0">
                <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span> Reducción de Riesgos
                </h4>
                <p className="text-gray-500 ml-9 leading-relaxed">
                  Una nutrición adecuada puede ayudar a reducir factores de riesgo asociados con diversas condiciones de salud.
                </p>
              </li>
              <li className="py-8 border-b border-gray-200 last:border-b-0">
                <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span> Fortalecimiento del Sistema Inmune
                </h4>
                <p className="text-gray-500 ml-9 leading-relaxed">
                  Alimentos específicos pueden apoyar el funcionamiento óptimo de tu sistema de defensa natural.
                </p>
              </li>
              <li className="py-8 border-b border-gray-200 last:border-b-0">
                <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span> Prevención Activa
                </h4>
                <p className="text-gray-500 ml-9 leading-relaxed">
                  Aprende a tomar decisiones alimenticias que protejan tu salud antes de que surjan problemas.
                </p>
              </li>
              <li className="py-8 border-b border-gray-200 last:border-b-0">
                <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span> Energía y Vitalidad
                </h4>
                <p className="text-gray-500 ml-9 leading-relaxed">
                  La nutrición preventiva puede mejorar tus niveles de energía y calidad de vida diaria.
                </p>
              </li>
              <li className="py-8 border-b border-gray-200 last:border-b-0">
                <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span> Hábitos Duraderos
                </h4>
                <p className="text-gray-500 ml-9 leading-relaxed">
                  Desarrolla una relación saludable con la comida que se mantenga a lo largo del tiempo.
                </p>
              </li>
              <li className="py-8 border-b border-gray-200 last:border-b-0">
                <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span> Bienestar Integral
                </h4>
                <p className="text-gray-500 ml-9 leading-relaxed">
                  La prevención nutricional impacta positivamente en tu salud física, mental y emocional.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-5 border-yellow-400 p-8 mx-10 mb-16 rounded-lg">
          <p className="text-yellow-800 leading-relaxed">
            <strong className="text-yellow-900 font-bold">Importante:</strong> El Manual de Prevención Nutricional es un recurso educativo complementario. No reemplaza la atención médica profesional ni el consejo de nutricionistas certificados. Para condiciones de salud específicas o necesidades dietéticas especiales, consulta a un profesional de la salud.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="px-10 pb-16">
          <div className="bg-blue-50 border-l-5 border-blue-500 p-10 rounded-lg mb-10">
            <p className="text-blue-800 text-lg mb-5 italic leading-relaxed">
              "Implementar las estrategias del manual cambió mi perspectiva sobre la alimentación. Ahora entiendo cómo prevenir problemas en lugar de solo reaccionar a ellos. Me siento más en control de mi salud."
            </p>
            <span className="text-blue-900 font-bold not-italic">- Miguel A.</span>
          </div>

          <div className="bg-green-100 border-3 border-green-500 p-10 rounded-xl text-center">
            <h3 className="text-green-800 text-3xl font-bold mb-4">✓ 100% Garantía - 90 Días</h3>
            <p className="text-green-700 text-lg">Si no estás satisfecho, reembolsamos tu inversión completa.</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-400 text-sm py-12 px-10 bg-gray-50">
          <p>Contenido educativo. Este producto no reemplaza atención médica profesional. Consulta a un profesional de la salud para su uso.</p>
        </div>

        {/* Hotmart Upsell - MANTIDO */}
        <div className="mt-8">
          <HotmartUpsell black={false} />
        </div>
      </div>
    </>
  );
}