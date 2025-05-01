
import React, { useState, useEffect } from 'react';

const ViewerCounter = () => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    // Gerar um número aleatório entre 602 e 694
    const randomViewers = Math.floor(Math.random() * (694 - 602 + 1)) + 602;
    setViewers(randomViewers);

    // Atualizar o número de visualizadores a cada 30 segundos
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 10) - 5; // Variação entre -5 e +5
      const newViewers = Math.max(602, Math.min(694, viewers + change));
      setViewers(newViewers);
    }, 30000);

    return () => clearInterval(interval);
  }, [viewers]);

  return (
    <div className="text-center my-4 text-sm text-gray-600">
      <p>{viewers} personas están mirando en este momento</p>
    </div>
  );
};

export default ViewerCounter;
