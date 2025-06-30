'use client';

import Script from "next/script";

// Declaração de tipo para window.pixelId
declare global {
  interface Window {
    pixelId: string;
  }
}

const PIXEL_ID = "681184c975426149fef54361";

export function UTMifyPixel() {
  return (
    <>
      <Script id="UTMify" strategy="afterInteractive">
        {`
          window.pixelId = "${PIXEL_ID}";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
          
          // Flag para garantir que o pageview seja disparado apenas uma vez
          let pageviewDispatched = false;
          
          // Função para verificar e disparar o pageview
          function checkAndTrackPageview() {
            if (typeof window.UTMify !== 'undefined' && !pageviewDispatched) {
              window.UTMify.track('pageview');
              pageviewDispatched = true;
              return true;
            }
            return false;
          }

          // Tenta disparar o pageview a cada 200ms até 5 segundos
          let attempts = 0;
          const maxAttempts = 25; // 5 segundos / 200ms = 25 tentativas
          
          const interval = setInterval(() => {
            attempts++;
            if (checkAndTrackPageview() || attempts >= maxAttempts) {
              clearInterval(interval);
            }
          }, 200);
        `}
      </Script>
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        data-utmify-prevent-xcod-sck
        data-utmify-ignore-iframe
        data-utmify-is-cartpanda
        async
        defer
      />
    </>
  );
} 