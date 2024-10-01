import { PropsWithChildren } from "react";
import style from "./Layout.module.scss";
import Header from "../Header";
import Footer from "../Footer";

export interface LayoutProps {
  withFooter?: boolean;
  withBackground?: boolean;
}

const Layout = ({
  children,
  withFooter = true,
  withBackground = true,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <div
        className={`${style["layout-container"]} ${
          withBackground ? style["pos_relative"] : style["pos_inherit"]
        }`}
      >
        <Header />
        <div className={`${style["layout-container__content"]} px-mobile-24`}>
          {children}
        </div>
        {withBackground && (
          <>
            <div className={style["layout-container__purple_bg"]}></div>
            <div className={style["layout-container__green_bg"]}></div>
          </>
        )}
      </div>

      {withFooter && <Footer />}
    </>
  );
};

export default Layout;
