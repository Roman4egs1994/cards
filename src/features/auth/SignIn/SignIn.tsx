import React from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button/Button";
import { useAppDispatch } from "../../../app/hooks";
import { authThunks } from "../auth.slice";
import { Link, redirect, useNavigate } from "react-router-dom";

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
  rememberMe: yup.boolean().oneOf([true, false], "Это поле обязательно"),
});
type FormDataType = yup.InferType<typeof schema>;

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    const preparedData = { ...data, rememberMe: !!data.rememberMe }; //Проверка на undefined
    dispatch(authThunks.login(preparedData))
      .unwrap()
      .then(() => navigate("/cards"))
      .catch();
    reset();
  };

  return (
    <>
      <AuthContainer textTitle={"Sign In"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputEmail}>
            <Input id={"email"} type={"email"} label={"Email"} {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.inputPasswordOne}>
            <Input id={"password"} type={"password"} label={"Password"} {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className={styles.inputCheckBoxBlock}>
            <Input
              id={"rememberMe"}
              type={"checkbox"}
              {...register("rememberMe")}
              className={styles.inputCheckBox}
            />
            <p className={styles.checkBoxText}>Remember me</p>
          </div>
          <div className={styles.forgotPasswordBlock}>
            <Link to={"/forgot"}>Forgot Password</Link>
          </div>
          <div className={styles.bottomBlock}>
            <Button type={"submit"} title={"Sign in"} className={styles.btn} />
            <p>Don't have an account?</p>
            <Link to={"/register"}>Sign Up</Link>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
