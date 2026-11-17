
import type { NextConfig } from "next"
import { basePath } from "./basePath"

const nextConfig: NextConfig = {
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

  // Generate static HTML files
  output: "export",

  // GitHub Pages repository path
  basePath,

  // Generate /about/index.html instead of /about.html
  trailingSlash: true,

  // Disable Next.js image optimization server
  images: {
    unoptimized: true,
  },
}

export default nextConfig
