import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes } from "react";

type ChipButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  isActive?: boolean;
};

export const ChipButton = ({
  isActive,
  children,
  ...rest
}: ChipButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "rounded-[15px] py-[7px] px-3 t-c2-m-12 bg-offWhite010 text-gray084 border-gray084 border-solid border-[1px]",
        {
          "bg-gray084 text-offWhite010": isActive,
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
