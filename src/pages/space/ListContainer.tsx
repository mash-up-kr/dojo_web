import { cn } from "@/utils/cn";
import type { PropsWithChildren, ReactNode } from "react";

export const ListContainer = ({
  titleIcon,
  title,
  children,
  containerClassName,
  isMore = true,
  onClickMoreButton,
}: PropsWithChildren<{
  titleIcon: ReactNode;
  title: string;
  containerClassName?: string;
  isMore?: boolean;
  onClickMoreButton: React.MouseEventHandler<HTMLButtonElement>;
}>) => {
  return (
    <div className={cn("px-4", containerClassName)}>
      <div className="flex items-center justify-between pb-4">
        <div className="flex space-x-1 items-center">
          {titleIcon}
          <h2 className="text-[#2b2b2b] t-h4-b-20">{title}</h2>
        </div>
        {isMore && (
          <button
            type="button"
            onClick={onClickMoreButton}
            className="t-c1-m-13 text-gray54"
          >
            더보기
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
