import React from 'react';
import styled from './ForgotPassword.module.scss'
import {FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {InputPassword} from "../../../components/InputPassword/InputPassword";
import {Button} from "../../../components/Button/Button";


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
                                <h2 className={styled.headerforgotPassword} style={{fontWeight: "900"}}>it-incubator</h2>
                                <p className={styled.textforgotPassword} style={{fontWeight: "900",marginBottom:"50px"}}>Forgot your password</p>
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
                                <div className={styled.buttonBlock}>
                                    <Button
                                        title={'Send Instructions'}
                                        callBack={onClickButtonSignUpHandler}
                                        style={{marginBottom: "20px"}}
                                        className={styled.buttonInstruction}
                                    />
                                    <p className={styled.rememberPassword}>Did you remember your password?</p>
                                    <a className={styled.linkTryLogginIn} href={'#'}>Try loggin in</a>
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

