import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwindcss.css";
import "@stackflow/plugin-basic-ui/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./app";
import { Stack } from "./stackflow";

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
            <Stack />
          </QueryClientProvider>
        </App>
      </React.StrictMode>,
    );
  });
}
