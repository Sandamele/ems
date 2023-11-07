/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMS_SERVER_LINK: process.env.EMS_SERVER_LINK,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  }
}

module.exports = nextConfig
