import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import { Toaster } from "sonner";
import ContentTypeProvider from '@/components/ContentTypeProvider.server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "This Cactus Recipe Reverses Your Type 2 Diabetes in 7 Days",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ContentTypeProvider>
          {children}
        </ContentTypeProvider>
        <Toaster />
      </body>
    </html>
  );
} 