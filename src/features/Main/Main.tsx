import React from "react";
import styled from "./Main.module.scss";
import styleStartContainer from "../../common/styles/Container.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../auth/Login/Login";
import { Header } from "../Header/Header";

export const Main = () => {
  const mainContainer = styleStartContainer.container + " " + styled.mainContainer;

  return (
    <main className={styled.mainBlock}>
      <div className={mainContainer}></div>
    </main>
  );
};
