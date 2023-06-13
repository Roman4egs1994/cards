import React, { FC, ReactNode, useEffect } from "react";
import styled from "./App.module.scss";
import { Header } from "features/Header/Header";
import styleStartContainer from "common/styles/Container.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { ErrorComponent } from "../components/ErrorComponent/ErrorComponent";
import { IsLoadingLinear } from "../components/IsLoadingLinear/IsLoadingLinear";
import { useAppDispatch, useAppSelector } from "./hooks";
import { authThunks } from "../features/auth/auth.slice";
import { Navigate, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { forgotStatus } from "../features/auth/localStorageStatus/localSrorageStatus";

type AppTypeProps = {
  children?: ReactNode;
};

const App: FC<AppTypeProps> = ({ children }) => {
  const mainContainer = styleStartContainer.container + " " + styled.mainContainer;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAppInitialized = useAppSelector((state) => state.app.isAppInitialized);

  console.log("forgotStatus", forgotStatus);

  useEffect(() => {
    dispatch(authThunks.authMe());
    // .unwrap()
    // .then(() => navigate("/cards"))
    // .catch(() => navigate("/login"));
    // }
  }, [dispatch]);

  if (!isAppInitialized) {
    return (
      <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%" }}>
        <CircularProgress />
      </div>
    );
  }

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
