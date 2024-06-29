import { cn } from "@/utils/cn";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function HeaderLogo() {
  return (
    <Link to="/" className="flex space-x-2 items-center">
      <span className="text-2xl">🤫</span>
      {/* TODO: update service name */}
      <h1 className="t-h3-b-22">Messhit</h1>
    </Link>
  );
}

export const Header = ({
  left,
  right,
  title,
  className,
}: { className?: string } & AtLeastOne<{
  left: ReactNode;
  right: ReactNode;
  title: string;
}>) => {
  return (
    <header
      className={cn(
        "relative flex items-center p-4 min-h-[52px] w-full z-10",
        className,
      )}
    >
      {left ? <div className="flex-shrink-0">{left}</div> : null}
      {title ? (
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 t-h5-sb-17 grow text-center truncate px-[60px]">
          {title}
        </h1>
      ) : null}
      {right ? <div className="flex-shrink-0">{right}</div> : null}
    </header>
  );
};

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
