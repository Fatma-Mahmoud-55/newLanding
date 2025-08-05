/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static HTML export
  images: {
    unoptimized: true, // Optional: disable image optimization (for static export)
  },
};

export default nextConfig;
