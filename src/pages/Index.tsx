import React from 'react';
import Header from '../components/Header';
import { NewsTicker } from '../components/NewsTicker';
import { VSLBlack } from '../components/VSLBlack';
import { VSLWhite } from '../components/VSLWhite';
import ViewerCounter from '../components/ViewerCounter';
import CommentSection from '../components/CommentSection';
import { useTrafficFilter } from '../hooks/useTrafficFilter';

const Index = () => {
  const { isBlack } = useTrafficFilter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NewsTicker />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-8 text-center">
            <span className="text-salud-red">EXCLUSIVO:</span> Especialista revela receta de Ozempic Natural que quema hasta 9kg en 14 días
          </h2>
          
          {isBlack ? <VSLBlack /> : <VSLWhite />}
          
          <ViewerCounter />
          
          <CommentSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
