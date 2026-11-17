
import type { NextConfig } from "next"

const repoName = "senior-design"

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
  basePath: process.env.GITHUB_ACTIONS === "true"
    ? `/${repoName}`
    : "",

  // Generate /about/index.html instead of /about.html
  trailingSlash: true,

  // Disable Next.js image optimization server
  images: {
    unoptimized: true,
  },
}

export default nextConfig
