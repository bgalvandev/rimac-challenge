import style from "./Checkbox.module.scss";
import { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}
const Checkbox = ({ text, ...rest }: CheckboxProps) => {
  return (
    <div className={style["checkbox-container"]}>
      <label className={style["container"]}>
        <input type="checkbox" {...rest} />
        <span className={style["checkmark"]}></span>
      </label>
      <p>{text}</p>
    </div>
  );
};

export default Checkbox;
