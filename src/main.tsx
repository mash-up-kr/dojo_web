import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./tailwindcss.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const isMockingEnabled = import.meta.env.VITE_ENABLED_MOCKING === "true";

async function enabledMocking() {
  if (!isMockingEnabled) {
    return;
  }
  const { worker } = await import("./mocks/browser");

  worker.start();
  return worker;
}

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const root = document.getElementById("root");
if (root) {
  enabledMocking().then(() => {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>,
    );
  });
}
