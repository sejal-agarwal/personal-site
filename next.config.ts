/** @type {import('next').NextConfig} */
const nextConfig = {
  // <-- this tells Next.js to do a full static export
  output: 'export',

  // if you’re deploying to a project site under /personal-site,
  // you’ll also need these. Skip if you have a user-site repo.
  basePath: '/personal-site',
  assetPrefix: '/personal-site/',
  trailingSlash: true,
}

module.exports = nextConfig
