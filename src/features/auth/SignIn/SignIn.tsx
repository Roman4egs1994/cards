import React, { ChangeEvent, useState } from "react";
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
  const [title, setTitle] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormDataType>();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const onClickBtnSignIn = () => {};

  const onChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    const string = e.currentTarget.value;
    setTitle(string);
    console.log(title);
  };

  return (
    <>
      <AuthContainer textTitle={"Sign In"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputEmail}>
            <Input type={"email"} label={"Email"} onChange={onChangeFunction} value={title} />
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
            <Button type={"submit"} callBack={onClickBtnSignIn} title={"Sign in"} className={styles.btn} />
            <p>Don't have an account?</p>
            <a href="/register">Sign Up</a>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
