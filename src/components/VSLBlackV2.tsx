/* eslint-disable react/no-unescaped-entities */

import Script from "next/script";

export default function VSLBlackV2() {

  return (
    <>
      <div id="vid_688f803f3614ea4fa0b34a73" style={{ position: "relative", width: "100%", padding: "56.25% 0 0" }}>
        <img 
          id="thumb_688f803f3614ea4fa0b34a73" 
          src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/688f803f3614ea4fa0b34a73/thumbnail.jpg" 
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
          alt="thumbnail" 
        />
        <div id="backdrop_688f803f3614ea4fa0b34a73" style={{ WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)", position: "absolute", top: "0", height: "100%", width: "100%" }}></div>
      </div>
      <Script id="scr_688f803f3614ea4fa0b34a73" strategy="afterInteractive">
        var s=document.createElement("script"); s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/688f803f3614ea4fa0b34a73/player.js", s.async=!0,document.head.appendChild(s);
      </Script>

      {/* Customiza CTAs injetados pelo player */}
      <Script id="custom-cta-img" strategy="afterInteractive">
        {`
          function customizeCTA(selector, imgSrc, altText) {
            const link = document.querySelector(selector);
            if (!link || link.dataset.customized) return;
            link.dataset.customized = '1';
            link.style.background = 'transparent';
            link.style.padding = '0';
            link.style.boxShadow = 'none';
            link.style.borderRadius = '0';
            link.innerHTML = '<img src="' + imgSrc + '" alt="' + altText + '" style="width:100%;max-width:350px;height:auto;">';
            // Adiciona ID para âncora se for o botão de 6 frascos
            if (selector.includes('_2')) {
              link.id = 'bottle-6-anchor';
            }
            link.style.margin = '0 auto'; // Centraliza e remove margens extras
            if (link.parentElement) {
              const container = link.parentElement;
              container.style.padding = '10px 0'; // Diminui espaço vertical
              container.style.margin = '0';

              function aplicarLayout() {
                const isDesktop = window.innerWidth >= 768;
                container.style.display = 'flex';
                container.style.flexDirection = isDesktop ? 'row' : 'column';
                container.style.justifyContent = 'center';
                container.style.alignItems = 'center';
                container.style.gap = isDesktop ? '20px' : '10px';
                container.style.flexWrap = 'wrap';
              }

              // Se o CTA já estiver visível (smartplayer-hide já removida)
              if (!container.classList.contains('smartplayer-hide')) {
                aplicarLayout();
              } else {
                // Observa a remoção da classe para aplicar o layout no momento certo
                const obsLayout = new MutationObserver(() => {
                  if (!container.classList.contains('smartplayer-hide')) {
                    aplicarLayout();
                    obsLayout.disconnect();
                  }
                });
                obsLayout.observe(container, { attributes: true, attributeFilter: ['class'] });
              }
            }
          }

          function tryCustomize() {
            customizeCTA('#callaction_688f803f3614ea4fa0b34a73_2 a', '/images/6-bottle.png', '6 Bottles');
            customizeCTA('#callaction_688f803f3614ea4fa0b34a73_1 a', '/images/3-bottle.png', '3 Bottles');
            customizeCTA('#callaction_688f803f3614ea4fa0b34a73_0 a', '/images/2-bottle.png', '2 Bottles');
          }

          // Tenta imediatamente
          tryCustomize();

          // Observa mutações para pegar quando o CTA aparecer
          const obs = new MutationObserver(tryCustomize);
          obs.observe(document.body, { childList: true, subtree: true });
        `}
      </Script>
    </>
  );
  
};