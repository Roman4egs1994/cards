import React from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { Button } from "../../../components/Button/Button";

export const SignUp = () => {
  const onClickBtnSignUp = () => {};

  return (
    <>
      <AuthContainer textTitle={"Sign Up"} classNameAuthContainer={styles.authContainer}>
        <div className={styles.inputEmail}>
          <Input type={"email"} label={"Email"} />
        </div>
        <div className={styles.inputPasswordOne}>
          <Input type={"password"} label={"Password"} />
        </div>
        <div className={styles.inputPasswordTwo}>
          <Input type={"password"} label={"Password"} />
        </div>
        <div className={styles.bottomBlock}>
          <Button callBack={onClickBtnSignUp} title={"Sign Up"} className={styles.btn} />
          <p>Already have an account?</p>
          <a href="/login">Sign In</a>
        </div>
      </AuthContainer>
    </>
  );
};
