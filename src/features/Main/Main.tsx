import React from "react";
import styled from "./Main.module.scss";
import styleStartContainer from "../../common/styles/Container.module.scss";

export const Main = () => {
  const mainContainer = styleStartContainer.container + " " + styled.mainContainer;

  return (
    <main className={styled.mainBlock}>
      <div className={mainContainer}></div>
    </main>
  );
};
