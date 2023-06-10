import React, { useState } from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { Button } from "../../../components/Button/Button";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { authThunks } from "../auth.slice";
import { ModalWindow } from "../../../components/ModalWindow/ModalWindow";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required").email("Email should have correct format"),
  password: yup
    .string()
    .required("Password is a required")
    .min(8, "Password must be between 8 and 16 characters")
    .max(16, "Password must be between 8 and 16 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
      "The password must contain at least one uppercase letter, one small letter, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
type FormDataType = yup.InferType<typeof schema>;

export const SignUp = () => {
  // const authError = useAppSelector((state) => state.auth.error);
  // const isLoading = useAppSelector((state) => state.app.isLoading);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isAlertMessage, setIisAlertMessage] = useState(false); // локальный state для регистрации
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const startFunction = () => {
    return setIisAlertMessage(true);
    // return navigate("/login");
  };

  const onSubmit = (data: FormDataType) => {
    // alert(JSON.stringify(data));
    dispatch(authThunks.register(data))
      .unwrap()
      .then(startFunction)
      .catch((err) => console.warn(err));
    reset();
  };

  const onclickCloseModalWindow = () => {
    setIisAlertMessage(false);
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
              title={"Send login"}
              callBack={() => {
                navigate("/login");
              }}
            />
          }
          content={"Your message has been sent successfully"}
          onClose={onclickCloseModalWindow}
          otherFunction={
            <Button
              className={styles.btnModalCloseWindow}
              callBack={onclickCloseModalWindow}
              title={"Close"}
            />
          }
        />
      ) : (
        <></>
      )}
      <AuthContainer textTitle={"Sign Up"} classNameAuthContainer={styles.authContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputEmail}>
            <Input type={"email"} label={"Email"} {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.inputPasswordOne}>
            <Input type={"password"} label={"Password"} {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className={styles.inputPasswordTwo}>
            <Input type={"password"} label={"Confirm password"} {...register("confirmPassword")} />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
          <div className={styles.bottomBlock}>
            <Button type={"submit"} title={"Sign Up"} className={styles.btn} />
            <p>Already have an account?</p>
            <Link to={"/login"}>Sign In</Link>
            {/*<a href="/login">Sign In</a>*/}
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
