const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: "export",
  assetPrefix: isGithubPages ? "/<nombre-del-repositorio>" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
