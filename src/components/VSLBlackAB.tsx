"use client";

import { useEffect } from "react";

export default function VSLBlackAB() {
  useEffect(() => {
    // Criar o elemento vturb-smartplayer
    const playerElement = document.createElement("vturb-smartplayer");
    playerElement.id = "ab-6893bad7b2b07c908fdae4e0";
    playerElement.style.display = "block";
    playerElement.style.margin = "0 auto";
    playerElement.style.width = "100%";

    // Adicionar o elemento ao DOM
    const container = document.getElementById("vturb-player-container");
    if (container) {
      container.appendChild(playerElement);
    }

    // Carregar o script do player
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/ab-test/6893bad7b2b07c908fdae4e0/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Exit Intent Script - Back redirect
    const link = 'https://healthprosperity.site/promo';
    let urlBackRedirect = link;
    
    if (document.location.search) {
      urlBackRedirect += (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') + document.location.search.replace('?', '');
    }

    // Adicionar estados no history
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);

    function handlePopState() {
      console.log('Back redirect ativado!');
      setTimeout(() => {
        window.location.href = urlBackRedirect;
      }, 100);
    }

    window.addEventListener('popstate', handlePopState);

    // Cleanup function
    return () => {
      if (container && container.contains(playerElement)) {
        container.removeChild(playerElement);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div 
      id="vturb-player-container" 
      className="w-full"
      style={{ minHeight: "400px" }}
    />
  );
}