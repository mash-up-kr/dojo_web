import type { ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
  buttonType?: "primary" | "line" | "disable";
  size?: "xs" | "sm" | "md";
};

const variants = tv({
  base: "rounded-8",
  variants: {
    type: {
      primary: "bg-purple100 text-offWhite010 t-c1-sb-13 border-0",
      line: "bg-offWhite010 text-purple100 border-solid border-purple100 border-[1px]",
      disable: "bg-gray022 text-offWhite010 border-0",
    },
    disabled: {
      true: "bg-gray022",
    },
    size: {
      xs: "px-2.5 py-1.5 t-c1-sb-13",
      sm: "px-3 py-2 t-c1-sb-13",
      md: "py-[14px] px-5 w-full t-h6-sb-15",
    },
  },
});

export const Button = ({
  className,
  children,
  buttonType = "primary",
  size = "md",
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={variants({
        type: buttonType,
        size,
        className,
        disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
