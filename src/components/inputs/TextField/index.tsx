import type { ColorTypes } from "@/types/ColorImpl";
import type { ReactNode, Ref } from "react";
import classes from "./TextField.module.scss";

type TextFieldProps = {
  color: ColorTypes | string;
  placeholder?: string;
  id: string;
  refInput?: Ref<HTMLInputElement>;
  refSelect?: Ref<HTMLSelectElement>;
  children?: ReactNode;
  type?: string;
  onChange?: (e: any) => void;
  onSelect?: () => void;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  value?: string | string[];
  multiline?: boolean;
  rows?: number;
  cols?: number;
  defaultChecked?: boolean;
  checked?: boolean;
  required?: boolean;
  select?: boolean;
};
const TextField = ({
  color,
  disabled = false,
  error = false,
  onChange,
  id,
  placeholder,
  select = false,
  required = false,
  multiline = false,
  value,
  rows,
  cols,
  type,
  label,
  defaultChecked,
  checked,
  refInput,
  refSelect,
  children,
  ...props
}: TextFieldProps) => {
  const inputColorStyle = classes[`input-${color}`];
  let inputType = (
    <input
      onChange={onChange}
      ref={refInput}
      className={inputColorStyle}
      name={id}
      id={id}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      aria-invalid={error}
      {...props}
    />
  );
  if (type === "checkbox") {
    inputType = (
      <label className={classes["text-field__checkbox-wrapper"]}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          ref={refInput}
          onChange={onChange}
          className={classes["text-field__checkbox-input"]}
          disabled={disabled}
          required={required}
          aria-invalid={error}
          {...props}
        />
        <span className={classes["text-field__custom-checkbox"]} />
        {label && (
          <span className={classes["text-field__checkbox-label"]}>{label}</span>
        )}
      </label>
    );
  }

  if (select) {
    inputType = (
      <>
        <select
          onChange={onChange}
          className={inputColorStyle}
          name={id}
          id={id}
          required={required}
          ref={refSelect}
        >
          {children}
        </select>
      </>
    );
  }

  if (multiline) {
    inputType = (
      <textarea
        className={inputColorStyle}
        name={id}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      >
        {children}
      </textarea>
    );
  }

  return (
    <div className={classes["text-field"]}>
      {label && type !== "checkbox" && (
        <label className={classes["text-field__label"]} htmlFor={id}>
          {label}
        </label>
      )}
      {inputType}
    </div>
  );
};
export default TextField;
