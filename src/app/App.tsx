import React, { FC, ReactNode, useEffect } from "react";
import styled from "./App.module.scss";
import { Main } from "../features/Main/Main";
import { Header } from "../features/Header/Header";
import { useAppDispatch, useAppSelector } from "./hooks";
import { appActions } from "./app.slice";
import styleStartContainer from "../common/styles/Container.module.scss";

type AppTypeProps = {
  children?: ReactNode;
};

const App: FC<AppTypeProps> = ({ children }) => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  });

  const mainContainer = styleStartContainer.container + " " + styled.mainContainer;

  return (
    <div className={styled.App}>
      <Header />
      <main className={styled.mainBlock}>
        <div className={mainContainer}>{children}</div>
      </main>
    </div>
  );
};

export default App;
