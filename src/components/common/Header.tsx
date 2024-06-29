import MashupLogo from "@/assets/mashup.svg?react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function HeaderLogo() {
  return (
    <Link to="/" className="flex gap-2 items-center">
      <MashupLogo />
      {/* TODO: update service name */}
      <h1 className="t-h3-b-22">LOGO</h1>
    </Link>
  );
}

export const Header = ({
  left,
  right,
  title,
}: AtLeastOne<{ left: ReactNode; right: ReactNode; title: string }>) => {
  return (
    <header className="flex items-center px-4 py-[15px] min-h-[52px]">
      {left ? <div>{left}</div> : null}
      {title ? <h1 className="t-h5-sb-17 grow text-center">{title}</h1> : null}
      {right ? <div>{right}</div> : null}
    </header>
  );
};

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
