import { PhoneIcon } from "../Icons";
import Logo from "../Logo";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`${style["header-container"]} px-mobile-24`}>
      <Logo />
      <div className={style["header-container__contact-info"]}>
        <div className={style["contact-info__text"]}>
          ¡Compra por este medio!
        </div>
        <div className={style["contact-info__number"]}>
          <PhoneIcon />
          <div>(01) 411 6001</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
