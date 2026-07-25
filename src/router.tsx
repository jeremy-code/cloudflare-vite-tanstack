import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getEnv } from "./functions/server";

export async function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  console.log("BASE_URL: ", import.meta.env.BASE_URL);
  console.log("env keys: ", Object.keys(import.meta.env));
  console.log("env keys: ", import.meta.env);
  await getEnv();
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
