import type { NextConfig } from "next";

const voiceBetaHeaders = [
  { key: "Cache-Control", value: "no-store, private" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "Permissions-Policy", value: "microphone=(self), camera=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/voice-beta/:path*",
        headers: voiceBetaHeaders,
      },
    ];
  },
};

export default nextConfig;
