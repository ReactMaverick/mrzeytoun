/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'; 

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    basePath: "/mrzeytoun",
    assetPrefix: "/mrzeytoun/",
    trailingSlash: true,
    images: {
      remotePatterns: [new URL("https://reactmavrick.online/mrzeytoun/**")],
    },
    env: {
      BASE_URL: isDev 
        ? "http://localhost:8087" 
        : "https://reactmavrick.online/mrzeytoun",
    },
  };
};

export default nextConfig;
