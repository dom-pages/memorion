import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, className = '' }) => {
  return (
    <Link 
      href={href}
      className={`
        inline-block
        px-8
        py-4
        text-lg
        font-bold
        text-white
        bg-red-600
        rounded-full
        shadow-lg
        hover:bg-red-700
        transition-colors
        duration-300
        ${className}
      `}
    >
      {text}
    </Link>
  );
};

export default CTAButton; 