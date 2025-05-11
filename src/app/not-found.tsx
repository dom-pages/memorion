'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <button
          onClick={() => router.push('/')}
          className="bg-salud-red text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
} 