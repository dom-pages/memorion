import React from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <Menu size={24} />
        </button>
        
        <div className="flex-1 flex justify-center">
          {/* Logo removido */}
        </div>
        
        <div className="w-10"></div> {/* Espaçador para manter o logo centralizado */}
      </div>
    </header>
  );
};

export default Header;
