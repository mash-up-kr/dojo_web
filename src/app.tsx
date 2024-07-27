import { Toaster } from "sonner";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-center"
        expand={false}
        offset={8}
        visibleToasts={1}
        duration={2000}
      />
    </>
  );
}
