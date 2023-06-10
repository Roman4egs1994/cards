import React from "react";
import { AuthContainer } from "../../AuthContainer/AuthContainer";
import styles from "./styled.module.scss";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Input/Input";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../../app/hooks";
import { authThunks } from "../../auth.slice";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is a required")
    .min(8, "Password must be between 8 and 16 characters")
    .max(16, "Password must be between 8 and 16 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
      "The password must contain at least one uppercase letter, one small letter, one number, and one special character"
    ),
});
type FormDataType = yup.InferType<typeof schema>;

export const CreateNewPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id: token } = useParams();

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
    if (token !== undefined) {
      const preparedData = { ...data, resetPasswordToken: token };
      dispatch(authThunks.setNewPassword(preparedData))
        .unwrap()
        .then(() => navigate("/login"));
    }
    reset();
  };
  return (
    <>
      <AuthContainer
        textTitle={"Create New Password"}
        classNameAuthContainer={styles.authContainer}
        styleBottomTitleText={{ marginBottom: "62px" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.iconCheckEmail}>
            <Input type={"password"} label={"Password"} {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className={styles.textBlock}>
            <p>Create new password and we will send you further instruction to email</p>
          </div>
          <div className={styles.bottomBlock}>
            <Button type={"submit"} title={"Back to Login"} className={styles.btn} />
          </div>
        </form>
      </AuthContainer>
    </>
  );
};
