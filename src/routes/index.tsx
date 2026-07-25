import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      {import.meta.env.BASE_URL}
      {import.meta.env.MODE}
      {import.meta.env.DEV}
      {import.meta.env.PROD}
      {import.meta.env.SSR}
    </div>
  );
}
