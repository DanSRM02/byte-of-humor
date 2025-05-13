import type { ReactNode } from "react";
import classes from "./Button.module.scss";

type buttonProps = {
  variant?: string;
  size?: string;
  children: ReactNode;
  handleChange?: () => void;
};

function Button({
  children,
  handleChange,
  variant = "primary",
  size = "medium",
  ...props
}: buttonProps) {
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
}

export default Button;
