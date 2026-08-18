import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: process.env.VERCEL ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
    },
  },
});

