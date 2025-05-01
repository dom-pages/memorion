
import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-salud-red text-white py-4 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Menu size={24} />
          <span className="ml-2 hidden sm:inline">MENU</span>
        </div>
        <h1 className="text-2xl font-bold">SALUD</h1>
        <div className="w-8"></div> {/* Spacer to balance the layout */}
      </div>
    </header>
  );
};

export default Header;
