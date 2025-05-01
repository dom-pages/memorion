
import React from 'react';
import { Play } from 'lucide-react';

const VideoPlaceholder = () => {
  return (
    <div className="w-full bg-salud-blue p-8 relative flex flex-col items-center justify-center text-white" style={{ minHeight: '400px' }}>
      <h2 className="text-2xl mb-6 text-center">Você já começou a assistir esse vídeo</h2>
      
      <div className="flex space-x-6 mb-4">
        <button className="flex items-center justify-center bg-transparent border border-white rounded-full px-4 py-2">
          <Play size={20} className="mr-2" />
          <span>Continuar assistindo?</span>
        </button>
        
        <button className="flex items-center justify-center bg-transparent border border-white rounded-full px-4 py-2">
          <Play size={20} className="mr-2" />
          <span>Assistir do início?</span>
        </button>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
