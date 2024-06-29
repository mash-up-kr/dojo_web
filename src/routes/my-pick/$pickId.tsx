import { MyPickDetailPage } from "@/pages/my-pick-detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-pick/$pickId")({
  component: () => <MyPickDetailPage />,
});
