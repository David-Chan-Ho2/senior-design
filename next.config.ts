import type { NextConfig } from "next";

const repoName = "senior-design";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
