import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Divided from "../../components/Divided";
import familyImage from "../../assets/img/family-group.png";
import { TitleForm, Form, DescriptionForm } from "../../components/Form";
import style from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import {
  getUserData,
  saveUserToLocalStorage,
  savePaymentResponsibleToLocalStorage,
} from "../../services/UserServices";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      saveUserToLocalStorage(userData);
    };

    fetchData();
  }, []);

  const handleSubmit = (formData: any) => {
    savePaymentResponsibleToLocalStorage(formData);
    navigate("/plans");
  };

  return (
    <Layout>
      <div className={style["home-container"]}>
        <div className={style["home-container__right"]}>
          <img src={familyImage} alt="Family Image" />
          <div className={style["right__texts"]}>
            <TitleForm />
          </div>
        </div>
        <div className={style["home-container__divider"]}>
          <Divided />
        </div>
        <div className={style["home-container__left"]}>
          <div className={style["left__texts"]}>
            <TitleForm />
          </div>
          <DescriptionForm />
          <div className={style["left__form-container"]}>
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
