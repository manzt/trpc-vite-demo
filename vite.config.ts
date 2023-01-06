// vite.config.ts
import { defineConfig } from "vite";

import { initTRPC } from "@trpc/server";
import { nodeHTTPRequestHandler } from "@trpc/server/adapters/node-http";

export type AppRouter = typeof appRouter;

let t = initTRPC.create();
export let appRouter = t.router({
  hello: t.procedure.query(() => "Hello, world."),
});

export default defineConfig({
  plugins: [
    {
      name: "trpc",
      configureServer(server) {
        server.middlewares.use("/trpc", async (req, res) => {
          // @ts-expect-error `req.url` does not exist on type but is present.
          let path = req.url.slice(1).split("?")[0];
          await nodeHTTPRequestHandler({ req, res, router: appRouter, path });
        });
      },
    },
  ],
});
