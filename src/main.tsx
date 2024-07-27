import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwindcss.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { App } from "./app";
import router from "./router";

const isMockingEnabled = import.meta.env.VITE_ENABLED_MOCKING === "true";

async function enabledMocking() {
  if (!isMockingEnabled) {
    return;
  }
  const { worker } = await import("./mocks/browser");

  worker.start();
  return worker;
}

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
        <App>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </App>
      </React.StrictMode>,
    );
  });
}
