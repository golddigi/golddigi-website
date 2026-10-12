import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.golddigi.com" }],
      destination: "https://golddigi.com/:path*",
      permanent: true,
    }, {
      source: "/case-studies/whatsapp-campaign-water-treatment",
      destination: "/case-studies/whatsapp-campaign-result",
      permanent: true,
    }];
  },
};

export default nextConfig;
