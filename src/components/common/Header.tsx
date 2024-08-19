import LogoImage from "@/assets/images/logo.png";
import { Link } from "@/stackflow/Link";
import { cn } from "@/utils/cn";
import { useActivity } from "@stackflow/react";
import type { ReactNode } from "react";
import Image from "./Image";

export function HeaderLogo() {
  const activity = useActivity();

  return activity.name === "VotePage" ? (
    <Image src={LogoImage} w={66} />
  ) : (
    <Link
      activityName="VotePage"
      activityParams={{}}
      className="flex space-x-2 items-center"
    >
      <Image src={LogoImage} w={66} />
    </Link>
  );
}

export const Header = ({
  left,
  right,
  title,
  className,
  leftClassName,
  titleClassName,
  rightClassName,
}: {
  className?: string;
  leftClassName?: string;
  titleClassName?: string;
  rightClassName?: string;
} & AtLeastOne<{
  left: ReactNode;
  right: ReactNode;
  title: string;
}>) => {
  return (
    <header
      className={cn(
        "relative flex items-center justify-between p-4 min-h-[52px] w-full z-20",
        className,
      )}
    >
      {left ? (
        <div className={cn("flex-shrink-0 z-[11]", leftClassName)}>{left}</div>
      ) : (
        <div />
      )}
      {title ? (
        <h1
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 t-h5-sb-17 grow text-center truncate px-[64px] max-w-full",
            titleClassName,
          )}
        >
          {title}
        </h1>
      ) : null}
      {right ? (
        <div className={cn("flex-shrink-0 z-[11]", rightClassName)}>
          {right}
        </div>
      ) : (
        <div />
      )}
    </header>
  );
};

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
