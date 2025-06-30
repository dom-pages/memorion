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
    window.pixelId = "681184c975426149fef54361";
    const pixelScript = document.createElement("script");
    pixelScript.setAttribute("async", "");
    pixelScript.setAttribute("defer", "");
    pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(pixelScript);

    // Script de UTMs
    const utmScript = document.createElement("script");
    utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    utmScript.setAttribute("data-utmify-prevent-subids", "");
    utmScript.setAttribute("data-utmify-prevent-xcod-sck", "");
    utmScript.setAttribute("data-utmify-ignore-iframe", "");
    utmScript.setAttribute("data-utmify-is-cartpanda", "");
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