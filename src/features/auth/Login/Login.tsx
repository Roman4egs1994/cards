import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from "@mui/material";
import styled from "./Login.module.scss";
import { Button } from "../../../components/Button/Button";
import { InputPassword } from "../../../components/InputPassword/InputPassword";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { authThunks } from "../auth.slice";
export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickButtonLoginHandler = () => {
    // navigate("/register");
  };

  const onClickButtonLoginHandlerNew = () => {
    const arg = {
      email: "r.rybkin94@gmail.com",
      password: "1qazxcvBG",
      rememberMe: true,
    };

    dispatch(authThunks.login(arg));
  };

  return (
    <>
      <button onClick={onClickButtonLoginHandlerNew}>login</button>
      <Grid container justifyContent={"center"} className={styled.grid}>
        <Grid item justifyContent={"center"}>
          <form className={styled.loginForm}>
            <FormControl>
              <FormLabel>
                {/*<h2 className={styled.headerLogin} style={{fontWeight: "900"}}>it-incubator</h2>*/}
                <p className={styled.textSignIn}>Sign in</p>
              </FormLabel>
              <FormGroup>
                <TextField
                  className={styled.inputLogin}
                  type={"email"}
                  label="Email"
                  variant="standard"
                  margin="normal"
                  // style={{marginBottom:"10px"}}
                />
                <InputPassword style={{ marginBottom: "10px" }} />
                <FormControlLabel
                  label={"Remember me"}
                  className={styled.checkBox}
                  control={<Checkbox name={"rememberMe"} />}
                />
                <FormLabel className={styled.formLabelForgot}>
                  <a className={styled.forgotPassword} href="">
                    Forgot Password
                  </a>
                </FormLabel>
                <div className={styled.buttonBlock}>
                  <Button
                    title={"Sign In"}
                    callBack={onClickButtonLoginHandler}
                    style={{ marginBottom: "20px", width: "347px" }}
                  />
                  <p className={styled.notHaveAcc}>Don't have an account?</p>
                  <a className={styled.linkSignUp} href={"/register"}>
                    Sign Up
                  </a>
                </div>
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
