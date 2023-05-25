import React from 'react';
import styled from './ForgotPassword.module.scss'
import {FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {Button} from "../../../components/Button/Button";
import {CheckEmail} from "./CheckEmail/CheckEmail";


export const ForgotPassword = () => {

    const onClickButtonSignUpHandler = () => {

    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form className={styled.forgotPassword}>
                        <FormControl>
                            <FormLabel>
                                <p className={styled.textForgotPassword}>Forgot your password?</p>
                            </FormLabel>
                            <FormGroup className={styled.flexGroup}>
                                <TextField
                                    className={styled.inputEmail}
                                    type={"email"}
                                    label="Email"
                                    variant="standard"
                                    margin="normal"
                                />
                                <FormLabel className={styled.formLabelForgot}>
                                    <p className={styled.forgotInstructionText}>
                                        Enter your email address and we will send you further instructions
                                    </p>

                                </FormLabel>
                                <div className={styled.btnBlock}>
                                    <Button
                                        title={'Send Instructions'}
                                        callBack={onClickButtonSignUpHandler}
                                        className={styled.buttonInstruction}
                                    />
                                    <p className={styled.rememberPassword}>Did you remember your password?</p>
                                    <a className={styled.linkTryLoggingIn} href={'#'}>Try logging in</a>
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

