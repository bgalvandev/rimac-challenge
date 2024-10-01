import style from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

type Variant = "default" | "left" | "right";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: Variant;
  isValid: boolean;
}

const Input = ({
  variant = "default",
  label,
  isValid = true,
  ...rest
}: InputProps) => {
  return (
    <div
      className={`${style["input-container"]} ${style[variant]} ${
        isValid ? style["default-border-color"] : style["error-border-color"]
      }`}
    >
      <label
        className={isValid ? style["default-color"] : style["error-color"]}
      >
        {label}
      </label>
      <input {...rest} />
    </div>
  );
};

export default Input;
