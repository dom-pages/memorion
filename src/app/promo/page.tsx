'use client';

import React from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';

export default function Promo() {
  return (
    <main>
      <Header />
      <NewsTicker />
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Promo
        </h1>
      </div>
    </main>
  );
} 