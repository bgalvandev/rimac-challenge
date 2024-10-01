import Divided from "../Divided";
import Logo from "../Logo";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style["footer-container"]}>
      <div className={`${style["footer-container__content"]} px-mobile-24`}>
        <div className={`${style["content__logo"]} desktop`}>
          <Logo color="white" />
        </div>
        <div className={`${style["content__logo"]} mobile`}>
          <Logo color="white" variant="horizontal" />
        </div>
        <div className={`${style["content__divider"]} mobile`}>
          <Divided mode="dark" />
        </div>
        <div className={style["content__text"]}>
          © 2023 RIMAC Seguros y Reaseguros.
        </div>
      </div>
    </div>
  );
};

export default Footer;
