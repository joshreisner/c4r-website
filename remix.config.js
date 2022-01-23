/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "netlify/functions/server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  mdx: async (filename) => {
    const [remarkToc, rehypeSlug] = await Promise.all([
      import("remark-toc").then((mod) => mod.default),
      import("rehype-slug").then((mod) => mod.default),
    ]);
    return {
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeSlug],
    };
  },
};
