import React, { FC, ReactNode, useEffect } from "react";
import styled from "./App.module.scss";
import { Header } from "features/Header/Header";
import { useAppDispatch, useAppSelector } from "./hooks";
import { appActions } from "./app.slice";
import styleStartContainer from "common/styles/Container.module.scss";
import { ToastContainer } from "react-toastify";

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

  const authError = useAppSelector<string | null>((state) => state.auth.error);

  return (
    <div className={styled.App}>
      <Header />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <main className={styled.mainBlock}>
        <div className={mainContainer}>{children}</div>
      </main>
    </div>
  );
};

export default App;
