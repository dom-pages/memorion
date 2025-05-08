import React from 'react';
import Header from '../components/Header';
import { NewsTicker } from '../components/NewsTicker';
import { VSLBlack } from '../components/VSLBlack';
import { VSLWhite } from '../components/VSLWhite';
import ViewerCounter from '../components/ViewerCounter';
import CommentSection from '../components/CommentSection';
import { useTrafficFilter } from '../hooks/useTrafficFilter';
import { UTMifyPixel } from '../components/UTMifyPixel';
import { useBackRedirect } from '../hooks/useBackRedirect';

const Index = () => {
  const { isBlack } = useTrafficFilter();

  // Adiciona o backredirect para a página de promo
  useBackRedirect('/promo');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <UTMifyPixel />
      <NewsTicker />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          {/* Script de data */}
          <div className="text-center mb-4" style={{ fontWeight: 700, fontSize: '1.15rem' }}>
            {(() => {
              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              const dd = String(tomorrow.getDate()).padStart(2, '0');
              const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
              const yyyy = tomorrow.getFullYear();
              return `Mira hasta el final, esta presentación saldrá del aire el día ${dd}/${mm}/${yyyy}.`;
            })()}
          </div>

          {/* Headline */}
          <h2 className="text-center font-extrabold" style={{ fontSize: '1.1rem', lineHeight: 1.15, paddingBottom: '2rem' }}>
            <span style={{ color: '#F5333F', textDecoration: 'underline' }}>
              DESENTRAÑANDO LAS APARIENCIAS:
            </span>{' '}
            <span style={{ color: '#111', textDecoration: 'none', fontWeight: 700 }}>
              La Verdura Verde que Podría Estar Jugando un Papel Crucial en la Proliferación de la
            </span>{' '}
            <span style={{ color: '#F5333F', textDecoration: 'underline' }}>
              Diabetes Tipo 2
            </span>
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
