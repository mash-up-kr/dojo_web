import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <h3 className="t-h1-b-34">About</h3>
    </div>
  );
}
