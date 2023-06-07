import React, { useState } from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../app/hooks";
import { authThunks } from "../auth.slice";
import { ModalWindow } from "../../../components/ModalWindow/ModalWindow";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required").email("Email should have correct format"),
});
type FormDataType = yup.InferType<typeof schema>;

export const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const [isAlertMessage, setAlertMessage] = useState(false);
  const navigate = useNavigate();

  //Настройка React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormDataType) => {
    const message = `<div style="background-color: lime; padding: 10px">
                     ссылка на восстановления пароля: 
                     <a href="http:/localhost:3000/set-new-password/$token$"> 
                     Скопировать ссылку на восстановления пароля</a>
                     </div>`;
    const from = `test-front-admin<R.rybkin94@gmail.com>`;

    const preparedData = { ...data, message, from: from }; //Докидываем параметры

    dispatch(authThunks.forgotPassword(preparedData))
      .unwrap()
      .then(() => setAlertMessage(true))
      .catch((err) => console.warn(err));
    reset();
    console.log("message", message);
  };

  return (
    <>
      {isAlertMessage ? (
        <ModalWindow
          classNameFooterFlex={styles.footerFlex}
          title={"Message"}
          footer={
            <Button
              className={styles.btnModalNavigateToLogin}
              type={"button"}
              title={"Send instructions"}
              callBack={() => {
                navigate("/check-email");
              }}
            />
          }
          content={"Your message has been sent successfully"}
          onClose={() => setAlertMessage(false)}
          otherFunction={
            <Button
              className={styles.btnModalCloseWindow}
              callBack={() => setAlertMessage(false)}
              title={"Close"}
            />
          }
        />
      ) : (
        <></>
      )}
      <AuthContainer
        textTitle={"Forgot your password"}
        classNameAuthContainer={styles.authContainer}
        styleBottomTitleText={{ marginBottom: "41px" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputEmail}>
            <Input type={"email"} label={"Email"} {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.inputBottomText}>
            <p>Enter your email address and we will send you further instructions</p>
          </div>
          <div className={styles.bottomBlock}>
            <Button title={"Send Instruction"} className={styles.btn} type={"submit"} />
            <p>Did you remember your password?</p>
            <a href="/login">Try logging in</a>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
