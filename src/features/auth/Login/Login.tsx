import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from "@mui/material";
import styled from "./Login.module.scss";
import { Button } from "../../../components/Button/Button";
import { InputPassword } from "../../../components/InputPassword/InputPassword";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  // const [showPassword, setShowPassword] = React.useState(false);
  //
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault();
  // };

  const navigate = useNavigate();
  const onClickButtonLoginHandler = () => {
    // navigate("/register");
  };

  return (
    <>
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
