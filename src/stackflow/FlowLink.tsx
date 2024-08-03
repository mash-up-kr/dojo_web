import type { ActivityComponentType } from "@stackflow/react";
import type { ReactNode } from "react";
import { type TypeActivities, routes } from ".";
import { useMyFlow } from "./useMyFlow";

export type FlowLinkProps<P extends keyof TypeActivities> = {
  page: P;
  params: TypeActivities[P] extends ActivityComponentType<infer U> ? U : never;
  children: ReactNode;
  className?: string;
};

export const FlowLink = <P extends keyof TypeActivities>({
  page,
  params,
  children,
  className,
}: FlowLinkProps<P>) => {
  const { push } = useMyFlow();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    push(page, params ?? {});
  };

  return (
    <a href={routes[page]} onClick={onClick} className={className}>
      {children}
    </a>
  );
};
