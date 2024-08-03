import { cn } from "@/utils/cn";
import type { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

export const ListContainer = ({
  redirectUrl,
  titleIcon,
  title,
  children,
  containerClassName,
  isMore = true,
}: PropsWithChildren<{
  titleIcon: ReactNode;
  title: string;
  redirectUrl: string;
  containerClassName?: string;
  isMore?: boolean;
}>) => {
  return (
    <div className={cn("px-4", containerClassName)}>
      <div className="flex items-center justify-between pb-4">
        <div className="flex space-x-1 items-center">
          {titleIcon}
          <h2 className="text-[#2b2b2b] t-h4-b-20">{title}</h2>
        </div>
        {isMore && (
          <Link to={redirectUrl} className="t-c1-m-13 text-gray54">
            더보기
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};
