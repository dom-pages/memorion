
import React from 'react';
import Header from '../components/Header';
import VideoPlaceholder from '../components/VideoPlaceholder';
import ViewerCounter from '../components/ViewerCounter';
import CommentSection from '../components/CommentSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-salud-red">EXCLUSIVO:</span> Especialista revela receta de Ozempic Natural que quema hasta 9kg en 14 días
          </h2>
          
          <VideoPlaceholder />
          
          <ViewerCounter />
          
          <CommentSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
