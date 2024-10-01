import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default Button;
