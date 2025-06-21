import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PinkSalt ESP",
  description: "Descubra o Segredo para Controlar o Açúcar Naturalmente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
} 