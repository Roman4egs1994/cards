import React from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const onClickBtnSendInstruction = () => {
    navigate("/forgot-password/check-email");
  };

  return (
    <>
      <AuthContainer
        textTitle={"Forgot your password"}
        classNameAuthContainer={styles.authContainer}
        styleBottomTitleText={{ marginBottom: "41px" }}
      >
        <div className={styles.inputEmail}>
          <Input type={"email"} label={"Email"} />
        </div>
        <div className={styles.inputBottomText}>
          <p>Enter your email address and we will send you further instructions</p>
        </div>
        <div className={styles.bottomBlock}>
          <Button callBack={onClickBtnSendInstruction} title={"Send Instruction"} className={styles.btn} />
          <p>Did you remember your password?</p>
          <a href="/login">Try logging in</a>
        </div>
      </AuthContainer>
    </>
  );
};
