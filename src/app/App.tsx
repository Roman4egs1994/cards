import React, { FC, ReactNode, useEffect } from "react";
import styled from "./App.module.scss";
import { Header } from "features/Header/Header";
import { useAppDispatch, useAppSelector } from "./hooks";
import { appActions } from "./app.slice";
import styleStartContainer from "common/styles/Container.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AppTypeProps = {
  children?: ReactNode;
};

const App: FC<AppTypeProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector((state) => state.app.error);
  // const isLoading = useAppSelector((state) => state.app.isLoading);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(appActions.setIsLoading({ isLoading: false }));
  //   }, 3000);
  // });

  const mainContainer =
    styleStartContainer.container + " " + styled.mainContainer;

  useEffect(() => {
    toast("Loaded successfully");
    toast.error(authError);
  }, [authError, dispatch]);

  return (
    <div className={styled.App}>
      <Header />
      {/*{isLoading && <p>isLoading</p>}*/}
      {/*{!!authError && <p>{authError}</p>}*/}

      <main className={styled.mainBlock}>
        <div className={mainContainer}>{children}</div>
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
          className={""}
          theme="colored"
        />
      </main>
    </div>
  );
};

export default App;
