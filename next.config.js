/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.goldengate.org",
        port: "",
        pathname: "/assets/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.sonomamarintrain.org",
        port: "",
        pathname: "/sites/default/files/Images/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/nleal707/**",
        search: "",
      },
    ],
  },
};