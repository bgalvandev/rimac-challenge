import style from "./Divided.module.scss";

type Mode = "light" | "dark";
export interface DividerProps {
  mode?: Mode;
}

const Divided = ({ mode = "light" }: DividerProps) => {
  return <div className={`${style["divider-container"]} ${style[mode]}`}></div>;
};

export default Divided;
