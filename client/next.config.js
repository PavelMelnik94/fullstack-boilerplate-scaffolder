const withImages = require('next-images');
const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['images.unsplash.com']
  },
  reactStrictMode: true,
  i18n           : {
    locales      : ["en"],
    defaultLocale: "en",
  },
}

module.exports = withImages();
module.exports = nextConfig;


module.exports = {
  productionBrowserSourceMaps: true,
}



// ***headers***


// const securityHeaders = [
//   {
//     'key'  : 'X-DNS-Prefetch-Control',
//     'value': 'on',
//   },
//   {
//     'key'  : 'X-XSS-Protection',
//     'value': '1; mode=block',
//   },
//   {
//     'key'  : 'X-Frame-Options',
//     'value': 'SAMEORIGIN',
//   },
// ]
// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source : '/:path*',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }


module.exports = withPlaiceholder(nextConfig)
