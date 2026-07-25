import { createIsomorphicFn } from "@tanstack/react-start";

const getEnv = createIsomorphicFn()
  .server(async () => {
    const { env } = await import("cloudflare:workers");
    console.log("server env: ", env);
    console.log("CONSTANT env", CONSTANT);
  })
  .client(async () => console.log("client env:", process.env));

export { getEnv };
