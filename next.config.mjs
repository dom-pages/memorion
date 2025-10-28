/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Configuração do domínio
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Configuração de redirecionamento para o domínio principal
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'localhost:3000',
          },
        ],
        destination: 'https://neurosalud.site',
        permanent: false,
      },
    ];
  },
};

export default nextConfig; 