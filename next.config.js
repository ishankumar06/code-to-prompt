/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This helps avoid the warning about cross-origin requests in dev
    allowedDevOrigins: ['http://localhost:3000'],
  },
};

export default nextConfig;
