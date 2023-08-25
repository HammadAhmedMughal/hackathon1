/** @type {import('next').NextConfig} */
const nextConfig = {
    disableCache: true,
    images:{
        domains:["cdn.sanity.io"]
    }
}
module.exports = {
    experimental: {
      // Defaults to 50MB
      isrMemoryCacheSize: 0,
    },
  }
module.exports = nextConfig
