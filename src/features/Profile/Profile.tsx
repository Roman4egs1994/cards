import React, { useState } from "react";
import styled from "./Profile.module.scss";
import arrow from "../../common/image/icon/Arrow.png";
import photoProfile from "../../common/image/photoProfile.jpg";
import { EditableLogin } from "./EditableLogin/EditableLogin";
import { Button } from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authThunks } from "../auth/auth.slice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const profile = useAppSelector((state) => state.auth.profile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!profile) {
    return (
      <div>
        <p>asdads</p>
      </div>
    );
  }
  // const onClickRefactoringLogin = (newLogin: string) => {
  //   setLogin(login.map((el) => ({ ...el, login: newLogin })));
  // };
  const onClickRefactoringName = () => {
    console.log();
  };
  const onClickLogoutProfile = () => {
    dispatch(authThunks.authMeLogOut())
      .unwrap()
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <>
      <div className={styled.profileBlock}>
        <div className={styled.toBack}>
          <img src={arrow} alt="" />
          <p>Back to Packs List</p>
        </div>
        <div className={styled.flexProfile}>
          <div className={styled.cardProfile}>
            <p className={styled.textHeader}>Personal Information</p>

            <>
              <div className={styled.photoProfile}>
                <img src={profile?.avatar} alt="" />
              </div>
              <div className={styled.nameLogin}>
                <EditableLogin login={profile?.name} callBack={onClickRefactoringName} />
              </div>
              <div className={styled.mail}>
                <p>{profile?.email}</p>
              </div>
            </>
            <Button
              className={styled.btnLogOut}
              callBack={onClickLogoutProfile}
              title={"Log out"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
