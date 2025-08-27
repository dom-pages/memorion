/* eslint-disable react/no-unescaped-entities */

import Script from "next/script";

export default function VSLBlackV2() {

  return (
    <>
      {/* Container principal com fallback */}
      <div 
        id="vsl-container"
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%',
          minHeight: '300px',
          position: 'relative'
        }}
      >
        {/* VSL Principal */}
        <div 
          id="vsl-main"
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          dangerouslySetInnerHTML={{
            __html: '<vturb-smartplayer id="vid-68af5f71040f0b0ec4ae1748" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
          }}
        />
        
        {/* Fallback - aparece se a VSL sumir */}
        <div 
          id="vsl-fallback"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'none',
            background: '#000',
            color: '#fff',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            zIndex: 1000
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <p>Carregando vídeo...</p>
              <button 
                onclick="reloadVSL()"
                style="background: #fff; color: #000; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 10px;"
              >
                Recarregar VSL
              </button>
            `
          }}
        />
      </div>

      <Script id="scr-68af5f71040f0b0ec4ae1748" strategy="beforeInteractive">
        {`
          // Sistema robusto de carregamento da VSL
          window.vturbPlayerLoaded = false;
          window.vslRetryCount = 0;
          window.maxRetries = 5;
          
          function loadVSL() {
            if (!window.vturbPlayerLoaded) {
              window.vturbPlayerLoaded = true;
              var s=document.createElement("script"); 
              s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68af5f71040f0b0ec4ae1748/v4/player.js"; 
              s.async=!0;
              s.onload = function() {
                console.log('VSL carregada com sucesso');
                hideFallback();
              };
              s.onerror = function() {
                console.error('Erro ao carregar VSL');
                showFallback();
                retryVSL();
              };
              document.head.appendChild(s);
            }
          }
          
          function reloadVSL() {
            window.vturbPlayerLoaded = false;
            window.vslRetryCount = 0;
            loadVSL();
          }
          
          function retryVSL() {
            if (window.vslRetryCount < window.maxRetries) {
              window.vslRetryCount++;
              setTimeout(loadVSL, 2000);
            }
          }
          
          function showFallback() {
            const fallback = document.getElementById('vsl-fallback');
            if (fallback) fallback.style.display = 'block';
          }
          
          function hideFallback() {
            const fallback = document.getElementById('vsl-fallback');
            if (fallback) fallback.style.display = 'none';
          }
          
          // Monitora se a VSL desaparece
          function monitorVSL() {
            const vslElement = document.getElementById('vid-68af5f71040f0b0ec4ae1748');
            if (!vslElement || vslElement.offsetHeight === 0) {
              showFallback();
              retryVSL();
            }
          }
          
          // Carrega imediatamente
          loadVSL();
          
          // Monitora a cada 5 segundos
          setInterval(monitorVSL, 5000);
        `}
      </Script>

      {/* Customização persistente dos CTAs */}
      <Script id="custom-cta-simple" strategy="beforeInteractive">
        {`
          // Função simples para customizar CTAs
          function customizeCTA(selector, imgSrc, altText) {
            const element = document.querySelector(selector);
            if (element && !element.dataset.customized) {
              element.dataset.customized = '1';
              element.innerHTML = '<img src="' + imgSrc + '" alt="' + altText + '" style="width:100%;max-width:350px;height:auto;display:block;margin:0 auto;">';
              
              // Remove padding e margens do elemento
              element.style.padding = '0';
              element.style.margin = '0';
              element.style.background = 'transparent';
              element.style.border = 'none';
              element.style.boxShadow = 'none';
              
              // Remove padding do container pai se existir
              if (element.parentElement) {
                element.parentElement.style.padding = '0';
                element.parentElement.style.margin = '0';
              }
              
              // Adiciona ID para âncora se for o botão de 6 frascos
              if (altText.includes('6 Bottles')) {
                element.id = 'bottle-6-anchor';
                
                // Adiciona animação de pulso para o botão de 6 bottles
                if (!element.dataset.pulseAdded) {
                  element.dataset.pulseAdded = '1';
                  element.style.animation = 'pulse 2s ease-in-out infinite';
                }
                
                // Cria a animação CSS se não existir
                if (!document.getElementById('pulse-animation')) {
                  const style = document.createElement('style');
                  style.id = 'pulse-animation';
                  style.textContent = '@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }';
                  document.head.appendChild(style);
                }
              }
            }
          }

          // Função para detectar CTAs pelo texto
          function findAndCustomizeCTAs() {
            const ctaButtons = document.querySelectorAll('a[id^="callaction-button-"]');
            
            ctaButtons.forEach(button => {
              const buttonText = button.textContent.trim().toLowerCase();
              
              if (buttonText.includes('6 bottles') || buttonText.includes('6-bottles')) {
                customizeCTA('#' + button.id, '/images/DTC-6-BOTTLE.png', '6 Bottles');
              } else if (buttonText.includes('3 bottles') || buttonText.includes('3-bottles')) {
                customizeCTA('#' + button.id, '/images/DTC-3-BOTTLE.png', '3 Bottles');
              } else if (buttonText.includes('2 bottles') || buttonText.includes('2-bottles')) {
                customizeCTA('#' + button.id, '/images/DTC-2-BOTTLE.png', '2 Bottles');
              }
            });
            
            // Remove espaçamento de todos os containers de CTA
            const ctaContainers = document.querySelectorAll('[class*="callaction"], [class*="smartplayer"]');
            ctaContainers.forEach(container => {
              container.style.padding = '0';
              container.style.margin = '0';
              container.style.gap = '0';
            });
          }

          // Função para verificar e customizar rapidamente
          function startCustomization() {
            // Primeira tentativa imediata
            findAndCustomizeCTAs();
            
            // Verifica a cada 500ms por 10 segundos
            let attempts = 0;
            const maxAttempts = 20;
            
            const interval = setInterval(() => {
              attempts++;
              findAndCustomizeCTAs();
              
              if (attempts >= maxAttempts) {
                clearInterval(interval);
              }
            }, 500);
          }
          
          // Inicia a customização imediatamente
          startCustomization();
        `}
      </Script>
    </>
  );
  
};