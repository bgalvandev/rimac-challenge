import HorizontalLogo from "./components/HorizontalLogo";
import VerticalLogo from "./components/VerticalLogo";
import style from "./Logo.module.scss";

type Color = "default" | "white" | "black";
type Variant = "vertical" | "horizontal";

export interface LogoProps {
  color?: Color;
  variant?: Variant;
}

const Logo = ({ color = "default", variant = "vertical" }: LogoProps) => {
  return (
    <div className={`${style["logo-container"]} ${style[color]}`}>
      {variant === "vertical" ? <VerticalLogo /> : <HorizontalLogo />}
    </div>
  );
};

export default Logo;
