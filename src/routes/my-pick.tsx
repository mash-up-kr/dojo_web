import { MyPickPage } from "@/pages/my-pick";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-pick")({
  component: () => <MyPickPage />,
});
