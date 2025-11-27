/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Outputs static HTML/CSS/JS
  images: {
    unoptimized: true, // Required for static export (GitHub Pages doesn't optimize images)
  },
  reactCompiler: true,
  // If deploying to https://<username>.github.io/<repo-name>/
  basePath: '/red-panda-blog', 
};

export default nextConfig;

