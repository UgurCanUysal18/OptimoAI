/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This forces Next.js to generate static files
  distDir: 'out',    // Specifies the output directory
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
