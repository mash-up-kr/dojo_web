import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_vote-layout/vote/done")({
  component: VoteDonePage,
});

function VoteDonePage() {
  return <div>Vote Done Page</div>;
}
