'use client';

import { useEffect } from 'react';

// Declaração de tipo para window.pixelId
declare global {
  interface Window {
    pixelId: string;
  }
}

export function UTMifyPixel() {
  useEffect(() => {
    // Configuração do pixel
    window.pixelId = "67ea72e465599c31208f4afa";
    const pixelScript = document.createElement("script");
    pixelScript.setAttribute("async", "");
    pixelScript.setAttribute("defer", "");
    pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(pixelScript);

    // Script de UTMs
    const utmScript = document.createElement("script");
    utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    utmScript.setAttribute("data-utmify-prevent-subids", "");
    utmScript.async = true;
    utmScript.defer = true;
    document.head.appendChild(utmScript);

    // Cleanup
    return () => {
      if (pixelScript.parentNode) {
        pixelScript.parentNode.removeChild(pixelScript);
      }
      if (utmScript.parentNode) {
        utmScript.parentNode.removeChild(utmScript);
      }
    };
  }, []);

  return null;
} 