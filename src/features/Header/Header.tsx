import React from "react";
import styled from "./Header.module.scss";
import styleStartContainer from "../../common/styles/Container.module.scss";
import logo from "../../common/image/icon/logo.8a063c2a.svg";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const headerContainer = styleStartContainer.container + " " + styled.headerContainer;
  const navigate = useNavigate();

  const onClickBtnSignIn = () => {
    navigate("/login");
  };

  return (
    <header className={styled.headerBlock}>
      <div className={headerContainer}>
        <img src={logo} alt="logo" />

        {/*ЕСЛИ НЕ ЗАЛОГИНЕНЫ*/}
        <Button callBack={onClickBtnSignIn} title={"Sign In"} className={styled.buttonSignIn} />

        {/*ЕСЛИ МЫ ЗАЛОГИНЕНЫ*/}
        {/*<div className={styled.loginTrue}>*/}
        {/*    <p className={styled.nameLogin}>Roman</p>*/}
        {/*    <img src="" alt=""/>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};
