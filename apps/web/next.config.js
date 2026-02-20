/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? "/DeeperTR" : "",
  assetPrefix: isGithubPages ? "/DeeperTR/" : undefined
};

module.exports = nextConfig;
