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

    // Cleanup function
    return () => {
      if (container && container.contains(playerElement)) {
        container.removeChild(playerElement);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Exit Intent Script - Only for Health BLACK page
  useEffect(() => {
    const link = 'https://healthprosperity.site/promo';

    function setBackRedirect(url) {
      let urlBackRedirect = url;
      urlBackRedirect = urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();

      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);

      window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      });
    }

    setBackRedirect(link);
  }, []);

  return (
    <div 
      id="vturb-player-container" 
      className="w-full"
      style={{ minHeight: "400px" }}
    />
  );
}