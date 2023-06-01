import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../../../../components/Button/Button";
import { AuthContainer } from "../../AuthContainer/AuthContainer";
import { useNavigate } from "react-router-dom";

export const CheckEmail = () => {
  const navigate = useNavigate();
  const onClickBtnBackToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <AuthContainer
        textTitle={"Check Email"}
        classNameAuthContainer={styles.authContainer}
        styleBottomTitleText={{ marginBottom: "29px" }}
      >
        <div className={styles.iconCheckEmail}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.textBlock}>
          <p>We've sent an Email with instruction to example@mail.com</p>
        </div>
        <div className={styles.bottomBlock}>
          <Button callBack={onClickBtnBackToLogin} title={"Back to Login"} className={styles.btn} />
        </div>
      </AuthContainer>
    </>
  );
};
