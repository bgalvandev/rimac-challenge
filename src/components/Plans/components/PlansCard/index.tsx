import React from "react";
import { applyDiscount } from "../../../../services/PlanServices";
import { Plan } from "../../../../types/Plans";
import style from "./PlansCard.module.scss";
import Divider from "../../../../components/Divided";
import { HomeIcon } from "../../../Icons";

interface PlansCardProps {
  plan: Plan;
  selectedForSomeoneElse: boolean;
  onSelect: (plan: Plan) => void;
}

export const PlansCard: React.FC<PlansCardProps> = ({
  plan,
  selectedForSomeoneElse,
  onSelect,
}) => {
  return (
    <div className={style["plan-card-container"]}>
      <div>
        <div className={style["plan-card-container__title-container"]}>
          <div className={style["title-container__title"]}>{plan.name}</div>
          <HomeIcon />
        </div>
        <div className={style["plan-card-container__cost-title"]}>
          COSTO DEL PLAN
        </div>
        <div className={style["plan-card-container__price"]}>
          ${applyDiscount(plan.price, selectedForSomeoneElse).toFixed(2)} al mes
        </div>
        <Divider />
        <div className={style["plan-card-container__descriptions-container"]}>
          {plan.description.map((desc, index) => (
            <div
              key={index}
              className={style["description-container__description"]}
            >
              <div className={style["description__point"]}></div>
              <div className={style["description__content"]}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={style["plan-card-container__button"]}
        onClick={() => onSelect(plan)}
      >
        Seleccionar Plan
      </button>
    </div>
  );
};
