import Divider from "../../components/Divided";
import { ArrowIcon, UserIcon } from "../../components/Icons/";
import Layout from "../../components/Layout";
import { Steps } from "../../components/Steps";
import React, { useEffect, useState } from "react";
import style from "./Summary.module.scss";

const Summary: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [paymentResponsible, setPaymentResponsible] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedPlan = localStorage.getItem("selectedPlan");
    const savedPaymentResponsible = localStorage.getItem("paymentResponsible");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }

    if (savedPaymentResponsible) {
      setPaymentResponsible(JSON.parse(savedPaymentResponsible));
    }
  }, []);

  if (!user || !selectedPlan || !paymentResponsible) {
    return (
      <div className="loading">
        <div className="loading__spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <Layout withFooter={false} withBackground={false}>
      <Steps step="two" />
      <div className={style["resume-container"]}>
        <button
          className={style["resume-container__arrow-container"]}
          onClick={() => window.history.back()}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
        <h1 className={style["resume-container__title"]}>Resumen del seguro</h1>
        <div className={style["resume-container__details"]}>
          <p className={style["details-card__subtitle"]}>
            PRECIOS CALCULADOS PARA:
          </p>
          <div className={style["details-card__name"]}>
            <UserIcon />
            <p>
              {user.name} {user.lastName}
            </p>
          </div>
          <Divider />
          <div>
            <p className={style["details-card__title"]}>Responsable de pago</p>
            <p className={style["details-card__item"]}>
              {paymentResponsible.documentType}:{" "}
              {paymentResponsible.documentNumber}
            </p>
            <p className={style["details-card__item"]}>
              Celular: {paymentResponsible.cellphone}
            </p>
          </div>
          <div className={style["details-card__content"]}>
            <p className={style["details-card__title"]}>Plan elegido</p>
            <p className={style["details-card__item"]}>{selectedPlan.name}</p>
            <p className={style["details-card__item"]}>
              Costo del Plan: ${selectedPlan.price.toFixed(2)} al mes
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summary;
