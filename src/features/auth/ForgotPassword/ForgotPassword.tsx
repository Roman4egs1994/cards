import React from "react";
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

const schema = yup.object().shape({
  email: yup.string().required("Email is a required").email("Email should have correct format"),
});
type FormDataType = yup.InferType<typeof schema>;

export const ForgotPassword = () => {
  const dispatch = useAppDispatch();

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
    const message = `<div style="background-color: lime; padding: 15px">
                     password recovery link: 
                     <a href="http://localhost:3000/#/set-new-password/$token$">
                     link</a>
                     </div>`;

    const from = `test-front-admin<R.rybkin94@gmail.com>`;

    const preparedData = { ...data, messages: message, from: from }; //Проверка на undefined

    dispatch(authThunks.forgotPassword(preparedData));
    // .unwrap()
    // .then(() => navigate("/check-email"))
    // .catch((err) => console.warn(err));
    // navigate("/set-new-password");
    reset();
  };

  return (
    <>
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
