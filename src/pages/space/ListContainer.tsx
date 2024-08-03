import { cn } from "@/utils/cn";
import type { FC, PropsWithChildren, ReactNode } from "react";

type ListContainerProps = PropsWithChildren<{
  titleIcon: ReactNode;
  title: string;
  containerClassName?: string;
  isMore?: boolean;
  onClickMoreButton: React.MouseEventHandler<HTMLButtonElement>;
}> &
  (
    | {
        isMore?: true;
        onClickMoreButton: React.MouseEventHandler<HTMLButtonElement>;
      }
    | {
        isMore: false;
        onClickMoreButton?: never;
      }
  );

export const ListContainer: FC<ListContainerProps> = ({
  titleIcon,
  title,
  children,
  containerClassName,
  isMore = true,
  onClickMoreButton,
}) => {
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
