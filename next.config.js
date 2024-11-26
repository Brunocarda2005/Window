const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  assetPrefix: isGithubPages ? "/Window" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
