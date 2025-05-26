import type { ReactNode, Ref } from "react";
import classes from "./Button.module.scss";
import type { ColorTypes } from "@/types/ColorType";

type ButtonProps = {
  variant: ColorTypes | string;
  size: string;
  children: ReactNode;
  icon?: string;
  ref?: Ref<HTMLButtonElement> | null;
  onClick?: () => void;
};

const Button = ({
  children,
  ref,
  onClick,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const buttonStyle = classes[`button-${variant}`];
  const sizeStyle = classes[`size-${size}`];

  return (
    <button
      ref={ref}
      className={`${buttonStyle} ${sizeStyle}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
