import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // URLs follow the live site. Aliases from the first redesign draft redirect here.
  async redirects() {
    return [
      { source: "/programmes", destination: "/our-work", permanent: true },
      { source: "/programmes/:slug", destination: "/our-work/:slug", permanent: true },
      { source: "/partner", destination: "/get-involved", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
