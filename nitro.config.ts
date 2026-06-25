import { defineConfig } from "nitro/config";

export default defineConfig({
  preset: "vercel",
  compatibilityDate: "2025-09-24",
  // Security / trust headers applied to every response. These don't directly
  // rank a page, but they contribute to Safe Browsing trust signals and are
  // expected of a professional, production-grade site.
  routeRules: {
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        "Strict-Transport-Security":
          "max-age=63072000; includeSubDomains; preload",
      },
    },
  },
});
