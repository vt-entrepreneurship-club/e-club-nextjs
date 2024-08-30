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
};

module.exports = nextConfig;
