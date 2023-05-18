import React from 'react';
import {
    FormControl,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@mui/material";
import styled from "./SignUp.module.scss";
import {Button} from "../../../components/Button/Button";
import {InputPassword} from "../../../components/InputPassword/InputPassword";

export const SignUp = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const onClickButtonSignUpHandler = () => {

    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form className={styled.signUpForm}>
                        <FormControl>
                            <FormLabel>
                                <h2 className={styled.headerSignUp} style={{fontWeight: "900"}}>it-incubator</h2>
                                <p className={styled.textSignIn} style={{fontWeight: "900"}}>Sign up</p>
                            </FormLabel>
                            <FormGroup>
                                <TextField
                                    className={styled.inputLogin}
                                    type={"email"}
                                    label="Email"
                                    variant="standard"
                                    margin="normal"

                                />
                                <InputPassword  style={{marginBottom: "5px"}}/>
                                <InputPassword
                                    style={{marginBottom: "80px"}}
                                />
                                <div className={styled.buttonBlock}>
                                    <Button
                                        className={styled.buttonCansel}
                                        title={'Cansel'}
                                        callBack={onClickButtonSignUpHandler}
                                        style={{marginBottom: "20px"}}
                                    />
                                    <Button
                                        title={'Register'}
                                        callBack={onClickButtonSignUpHandler}
                                        style={{marginBottom: "20px", witch: "187px"}}
                                        className={styled.buttonRegister}
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

