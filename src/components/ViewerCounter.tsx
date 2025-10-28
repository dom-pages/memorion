"use client";

import React, { useState, useEffect } from 'react';

const ViewerCounter = () => {
  const [viewers, setViewers] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Gerar um número aleatório entre 71.681 e 71.898
    const randomViewers = Math.floor(Math.random() * (71898 - 71681 + 1)) + 71681;
    setViewers(randomViewers);

    // Atualizar o número de visualizadores a cada 30 segundos
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(71681, Math.min(71898, prev + change));
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Evita erro de hidratação mostrando número fixo no servidor
  if (!mounted) {
    return (
      <div className="text-center my-4 text-sm text-gray-600">
        <p><span className="text-[#D9534F] font-bold">71.781</span> people are watching now</p>
      </div>
    );
  }

  return (
    <div className="text-center my-4 text-sm text-gray-600">
      <p><span className="text-[#D9534F] font-bold">{viewers.toLocaleString('en-US')}</span> people are watching now</p>
    </div>
  );
};

export default ViewerCounter;