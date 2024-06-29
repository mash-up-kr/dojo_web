import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster
        position="top-center"
        expand={false}
        offset={8}
        visibleToasts={1}
        duration={2000}
      />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
