/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.jsonkeeper.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
