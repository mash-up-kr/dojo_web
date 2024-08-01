import type { ButtonHTMLAttributes, ReactNode } from "react";

export const PickRankCard = ({
  icon,
  content,
  pickCount,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  content: string;
  pickCount: number;
}) => {
  return (
    <button
      type="button"
      className="px-4 h-[86px] bg-offWhite020 rounded-12 flex items-center w-full"
      {...rest}
    >
      <div className="shrink-0">{icon}</div>
      <p className="t-b3-sb-14 text-gray084 pl-3 line-clamp-3 m-0">{content}</p>
      <span className="inline-block ml-auto t-c1-m-13 text-purple100 shrink-0 pl-3">
        Pick {pickCount}
      </span>
    </button>
  );
};
