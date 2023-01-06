// main.ts
import { createTRPCProxyClient, httpLink } from "@trpc/client";

let client = createTRPCProxyClient<import("./vite.config").AppRouter>({
  links: [httpLink({ url: "/trpc" })],
});

let text = await client.hello.query();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>${text}</h1>
  </div>
`;
