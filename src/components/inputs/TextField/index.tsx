import type { ColorTypes } from "@/types/ColorTypes";
import type { ReactNode } from "react";
import classes from "./TextField.module.scss";

type TextFieldProps = {
  color: ColorTypes | string;
  size: string;
  placeholder: string;
  children?: ReactNode;
  type?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  cols?: number;
  required?: boolean;
  select?: boolean;
};
const TextField = ({
  color,
  size,
  disabled = false,
  error = false,
  placeholder,
  select = false,
  required = false,
  multiline = false,
  rows,
  cols,
  type,
  label,
  children,
  ...props
}: TextFieldProps) => {
  const formatLabel = label?.split(" ").join("-").toLowerCase();
  const inputColorStyle = classes[`input-${color}`];
  const inputTypeStyle = classes[`size-${size}`];
  let inputType = (
    <>
      <input
        className={`${inputColorStyle} ${inputTypeStyle}`}
        id={formatLabel}
        type={type}
        placeholder={placeholder}
        readOnly={disabled}
        required={required}
        {...props}
      />
    </>
  );

  if (multiline) {
    inputType = (
      <>
        <textarea
          className={`${inputColorStyle} ${inputTypeStyle}`}
          name={formatLabel}
          id={formatLabel}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          required={required}
          {...props}
        >
          {children}
        </textarea>
      </>
    );
  }

  return (
    <div className={classes["text-field"]}>
      {label && (
        <label className={classes["text-field__label"]} htmlFor={formatLabel}>
          {label}
        </label>
      )}
      {inputType}
    </div>
  );
};
export default TextField;
