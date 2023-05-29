import React from "react";
import { FormControl, FormGroup, FormLabel, Grid, TextField } from "@mui/material";
import styled from "./SignUp.module.scss";
import { Button } from "../../../components/Button/Button";
import { InputPassword } from "../../../components/InputPassword/InputPassword";

export const SignUp = () => {
  const onClickButtonSignUpHandler = () => {};

  return (
    <>
      <Grid container justifyContent={"center"}>
        <form className={styled.signUpForm}>
          <FormControl>
            <FormLabel>
              <p className={styled.textSignUp}>Sign Up</p>
            </FormLabel>
            <FormGroup>
              <TextField className={styled.inputSignup} type={"email"} label="Email" variant="standard" />
              <InputPassword style={{ marginBottom: "10px" }} />
              <InputPassword style={{ marginBottom: "80px" }} />
              <div className={styled.buttonBlock}>
                <Button title={"Sign Up"} callBack={onClickButtonSignUpHandler} className={styled.buttonRegister} />
                <p className={styled.alreadyAcc}>Already have account?</p>
                <a className={styled.linkSignIn} href={"/login"}>
                  Sign In
                </a>
              </div>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </>
  );
};
