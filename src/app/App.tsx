import React, { FC, ReactNode } from "react";
import styled from "./App.module.scss";
import { Header } from "features/Header/Header";
import styleStartContainer from "common/styles/Container.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { ErrorComponent } from "../components/ErrorComponent/ErrorComponent";
import { IsLoadingLinear } from "../components/IsLoadingLinear/IsLoadingLinear";

type AppTypeProps = {
  children?: ReactNode;
};

const App: FC<AppTypeProps> = ({ children }) => {
  const mainContainer =
    styleStartContainer.container + " " + styled.mainContainer;

  return (
    <div className={styled.App}>
      <Header />
      <IsLoadingLinear />
      <ErrorComponent />
      <main className={styled.mainBlock}>
        <div className={mainContainer}>{children}</div>
      </main>
    </div>
  );
};

export default App;
