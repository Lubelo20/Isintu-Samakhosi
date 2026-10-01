import type { NextConfig } from "next";

// The site is a fully static export: `npm run build` writes plain HTML, CSS, JS and
// images to `out/`, which any static host can serve (GitHub Pages, Netlify, cPanel).
// Set NEXT_PUBLIC_BASE_PATH when the site lives in a sub-folder, e.g. "/Isintu-Samakhosi"
// for https://lubelo20.github.io/Isintu-Samakhosi/. Leave it empty on the real domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Every page is written as folder/index.html, which static hosts serve without rewrites.
  trailingSlash: true,
  // No image server in a static export: lib/image-loader.ts serves the files as they are.
  images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
};

export default nextConfig;
