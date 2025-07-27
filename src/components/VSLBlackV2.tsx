/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Script from "next/script";

export default function VSLBlackV2() {

  return (
    <>
      <div id="vid_68855e32fb6a9e3c8af6c049" style={{ position: "relative", width: "100%", padding: "56.25% 0 0" }}>
        <Image
          alt="Video"
          width={64}
          height={54}
          id="thumb_68855e32fb6a9e3c8af6c049" 
          src="https://images.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68855e32fb6a9e3c8af6c049/thumbnail.jpg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          unoptimized
        />
        <div id="backdrop_68855e32fb6a9e3c8af6c049"
          style={{ WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)", position: "absolute", top: "0", height: "100%", width: "100%" }} />
      </div>
      <Script id="scr_68855e32fb6a9e3c8af6c049" strategy="afterInteractive">
        {`
          var s=document.createElement("script"); 
          s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68855e32fb6a9e3c8af6c049/player.js"; 
          s.async=!0;
          document.head.appendChild(s);
        `}
      </Script>
    </>
  );
  
};