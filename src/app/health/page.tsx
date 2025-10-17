'use client';

import React from 'react';
import NewsTicker from '@/components/NewsTicker';
import VSLBlackV3 from '@/components/VSLBlackV3';
import VSLBlackAB from '@/components/VSLBlackAB';
import VSLWhite from '@/components/VSLWhite';
import ViewerCounter from '@/components/ViewerCounter';
import { UTMifyPixel } from '@/components/UTMifyPixel';
import { useTraffic } from '@/components/TrafficProvider.client';
import CommentSection from '@/components/CommentSection';
import { useSearchParams } from 'next/navigation';

export default function Health() {
  const { isBlack } = useTraffic();
  
  const searchParams = useSearchParams();
  const hasParams = searchParams.toString().length > 0;

  return (
    <main>
      <UTMifyPixel />
      
      {/* Mostrar NewsTicker apenas para páginas BLACK */}
      {isBlack && <NewsTicker />}
      
      <div className="px-6 md:px-8 py-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            {isBlack ? (hasParams ? <VSLBlackAB /> : <VSLBlackV3 />) : <VSLWhite />}
          </div>
        </div>
        
        {/* Mostrar ViewerCounter apenas para páginas BLACK */}
        {isBlack && <ViewerCounter />}
        
        {/* Mostrar comentários apenas para páginas BLACK */}
        {isBlack && <CommentSection />}
      </div>
    </main>
  );
}

<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>