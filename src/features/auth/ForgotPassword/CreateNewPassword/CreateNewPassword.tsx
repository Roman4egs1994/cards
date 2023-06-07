import React from "react";
import { AuthContainer } from "../../AuthContainer/AuthContainer";
import styles from "./styled.module.scss";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Input/Input";
import { useNavigate } from "react-router-dom";

export const CreateNewPassword = () => {
  const navigate = useNavigate();
  const Navig = () => {
    navigate("/login");
  };
  return (
    <>
      <AuthContainer
        textTitle={"Create New Password"}
        classNameAuthContainer={styles.authContainer}
        styleBottomTitleText={{ marginBottom: "62px" }}
      >
        <div className={styles.iconCheckEmail}>
          <Input type={"password"} label={"Password"} />
        </div>
        <div className={styles.textBlock}>
          <p>Create new password and we will send you further instruction to email</p>
        </div>
        <div className={styles.bottomBlock}>
          <Button type={"submit"} title={"Back to Login"} callBack={Navig} className={styles.btn} />
        </div>
      </AuthContainer>
    </>
  );
};
