'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import NewsTicker from '@/components/NewsTicker';
import VSLBlackAB from '@/components/VSLBlackAB';
import { UTMifyPixel } from '@/components/UTMifyPixel';

// Lazy load componentes pesados
const ViewerCounter = dynamic(() => import('@/components/ViewerCounter'), {
  loading: () => <div className="h-8" />,
  ssr: false
});

const CommentSection = dynamic(() => import('@/components/CommentSection'), {
  loading: () => <div className="h-32" />,
  ssr: false
});

export default function Black() {
  return (
    <>
      <main>
        <UTMifyPixel />
        
        <NewsTicker />
        
        <div className="px-6 md:px-8 py-4">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <VSLBlackAB />
            </div>
          </div>
          
          <Suspense fallback={<div className="h-8" />}>
            <ViewerCounter />
          </Suspense>
          
          <Suspense fallback={<div className="h-32" />}>
            <CommentSection />
          </Suspense>
        </div>
      </main>
    </>
  );
}
