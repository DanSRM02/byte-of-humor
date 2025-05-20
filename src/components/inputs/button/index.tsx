import type { ReactNode } from "react";
import classes from "./Button.module.scss";
import type { ColorTypes } from "@/types/ColorTypes";

type ButtonProps = {
  variant: ColorTypes | string;
  size: string;
  children: ReactNode;
  handleChange?: () => void;
};

const Button = ({
  children,
  handleChange,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const buttonStyle = classes[`button-${variant}`];
  const sizeStyle = classes[`size-${size}`];

  return (
    <button
      className={`${buttonStyle} ${sizeStyle}`}
      onClick={handleChange}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
