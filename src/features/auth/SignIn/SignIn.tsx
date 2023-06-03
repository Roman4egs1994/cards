import React from "react";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { Input } from "../../../components/Input/Input";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/Button/Button";
import { useAppDispatch } from "../../../app/hooks";

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
  check: yup.boolean(),
});
type FormDataType = yup.InferType<typeof schema>;

export const SignIn = () => {
  const dispatch = useAppDispatch();

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
    alert(JSON.stringify(data));
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
            <Input id={"check"} type={"checkbox"} {...register("check")} className={styles.inputCheckBox} />
            <p className={styles.checkBoxText}>Remember me</p>
          </div>
          <div className={styles.forgotPasswordBlock}>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <div className={styles.bottomBlock}>
            <Button type={"submit"} title={"Sign in"} className={styles.btn} />
            {/*<button type={"submit"}>asdasd</button>*/}
            <p>Don't have an account?</p>
            <a href="/register">Sign Up</a>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
