import React from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormDataType = {
  firstName: string;
  lastName: string;
};

export const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormDataType>();

  const onClickBtnSignIn = () => {};

  return (
    <>
      <AuthContainer textTitle={"Sign In"}>
        <form action="">
          <div className={styles.inputEmail}>
            <Input type={"email"} label={"Email"} />
          </div>
          <div className={styles.inputPasswordOne}>
            <Input type={"password"} label={"Password"} />
          </div>
          <div className={styles.inputCheckBoxBlock}>
            <Input type={"checkbox"} className={styles.inputCheckBox} />
            <p className={styles.checkBoxText}>Remember me</p>
          </div>
          <div className={styles.forgotPasswordBlock}>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <div className={styles.bottomBlock}>
            <Button callBack={onClickBtnSignIn} title={"Sign in"} className={styles.btn} />
            <p>Don't have an account?</p>
            <a href="/register">Sign Up</a>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
