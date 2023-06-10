import React from "react";
import styled from "./Header.module.scss";
import styleStartContainer from "../../common/styles/Container.module.scss";
import logo from "../../common/image/icon/logo.8a063c2a.svg";
import { Button } from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authApi } from "../auth/auth.api";
import { authThunks } from "../auth/auth.slice";

export const Header = () => {
  const headerContainer = styleStartContainer.container + " " + styled.headerContainer;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inAuthMe = useAppSelector((state) => state.auth.me);
  // const inLogin = useAppSelector((state) => state.auth.inLogin);
  const profile = useAppSelector((state) => state.auth.profile);

  const onClickBtnSignIn = () => {
    navigate("/login");
  };

  return (
    <header className={styled.headerBlock}>
      <div className={headerContainer}>
        <img src={logo} alt="logo" />
        {inAuthMe ? (
          <Link to={"/profile"}>
            <div className={styled.loginTrue}>
              <p className={styled.nameLogin}>{profile?.name}</p>
              <img src={profile?.avatar} alt="avatar" />
            </div>
          </Link>
        ) : (
          <Button callBack={onClickBtnSignIn} title={"Sign In"} className={styled.buttonSignIn} />
        )}
      </div>
    </header>
  );
};
