'use client';

import Script from "next/script";

// Declaração de tipo para window.pixelId
declare global {
  interface Window {
    pixelId: string;
  }
}

const PIXEL_ID = "68e2e95abfbbf4d9998b1080";

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