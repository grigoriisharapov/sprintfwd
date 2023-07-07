import { FC, ReactNode } from "react";
import Header from "../Header";
import style from './Layout.module.css';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={style.root}>
      <Header />
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default Layout;

