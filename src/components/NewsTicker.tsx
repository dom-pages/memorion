import React from 'react';

export default function NewsTicker() {
  return (
    <div className="w-full bg-white text-black py-3 border-b border-[#e5e5e5]">
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-medium">SECRET REVEALED – LIVE COVERAGE</span>
        </div>
      </div>
    </div>
  );
}