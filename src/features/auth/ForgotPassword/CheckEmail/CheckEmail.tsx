import React from 'react';
import {FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import styled from './checkEmail.module.scss'
import {Button} from "../../../../components/Button/Button";


export const CheckEmail = () => {

    const onClickButtonLoginHandler = () => {

    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form className={styled.checkEmail}>
                        <FormControl>
                            <FormLabel>
                                <h2 className={styled.headerCheckEmailText}>Check Email</h2>
                            </FormLabel>
                            <FormGroup>
                                <div className={styled.blockCircle}>
                                    <div className={styled.iconCircle}></div>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <p className={styled.text}>
                                    We've sent an Email with instructions to example@mail.com
                                </p>
                            </FormGroup>
                            <div className={styled.buttonBlock}>
                                <Button
                                    title={'Back to login'}
                                    callBack={onClickButtonLoginHandler}
                                    className={styled.btnBackToLogin}
                                />
                            </div>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

