/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/startup-sprint/2024",
        destination: "/ss",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
};

module.exports = nextConfig;
