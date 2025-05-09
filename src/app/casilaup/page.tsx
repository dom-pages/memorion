'use client';

import React from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';

export default function CasilaUp() {
  return (
    <main>
      <Header />
      <NewsTicker />
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Casila Up
        </h1>
      </div>
    </main>
  );
} 