import { useEffect } from "react";

export default function VSLBlackV2() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="68e04eb01a53f5891f920fce"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/68e04eb01a53f5891f920fce/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="68e04eb01a53f5891f920fce"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-68e04eb01a53f5891f920fce" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        maxWidth: "400px",
        "--player-border-radius": "20px",
        "--player-box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      }} 
    />
  );

};