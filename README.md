# trpc-vite-demo

Minimal boilerplate to start experimenting with [tRPC](https://trpc.io/) with
[Vite](https://vitejs.dev/). Interact with the `AppRouter` (defined _within_
`vite.config.ts`) from your client code directly.

```bash
pnpm install
pnpm dev
```

## How it works

This template extends the Vite dev server with a `/trpc` endpoint, connecting
the type-safe `AppRouter` _as middleware_ to the client. During development, any
changes to the `router` or client yield a live refresh.

For production, you'll want to export the `appRouter` from `vite.config.ts` and
[create a standalone HTTP server](https://trpc.io/#quick-intro).
