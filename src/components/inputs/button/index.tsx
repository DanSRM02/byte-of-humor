import type { ReactNode, Ref } from "react";
import classes from "./Button.module.scss";
import type { ColorTypes } from "@/types/ColorImpl";

type ButtonProps = {
  variant: ColorTypes | string;
  size: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  icon?: string;
  tabIndex: number;
  ref?: Ref<HTMLButtonElement> | null;
  onClick?: () => void;
  "aria-label"?: string;
  "aria-pressed"?: boolean;
  disabled?: boolean;
};

const Button = ({
  children,
  ref,
  onClick,
  variant,
  size,
  type,
  tabIndex,
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = classes[`button-${variant}`];
  const sizeStyle = classes[`size-${size}`];

  return (
    <button
      ref={ref}
      type={type}
      className={`${buttonStyle} ${sizeStyle}`}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={props["aria-label"]}
      aria-pressed={props["aria-pressed"]}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
