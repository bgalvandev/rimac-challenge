import { CheckIcon } from "../../../Icons";
import style from "./Cart.module.scss";

import { ButtonHTMLAttributes } from "react";

export interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: () => JSX.Element;
  title: string;
  description: string;
  selected: boolean;
}

export const Card = ({
  Icon,
  title,
  description,
  selected,
  onClick,
}: CardProps) => {
  return (
    <button
      className={`${style["smallcard-container"]} ${
        selected ? style["selected"] : style["unselected"]
      }`}
      onClick={onClick}
    >
      <div className={style["smallcard-container__checkbox-container"]}>
        {selected ? (
          <CheckIcon />
        ) : (
          <div className={style["checkbox-container__unchecked"]}></div>
        )}
      </div>
      <div className={style["smallcard-container__title-container"]}>
        <Icon />
        <h3>{title}</h3>
      </div>
      <p className={style["smallcard-container__description"]}>{description}</p>
    </button>
  );
};
