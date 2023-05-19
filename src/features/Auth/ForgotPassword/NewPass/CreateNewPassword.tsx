import React from 'react';
import {FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import styled from './CreateNewPasswoed.module.scss'
import {Button} from "../../../../components/Button/Button";
import {InputPassword} from "../../../../components/InputPassword/InputPassword";


export const CreateNewPassword = () => {

    const onClickButtonLoginHandler = () => {

    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form className={styled.createNewPassword}>
                        <FormControl>
                            <FormLabel>
                                <h2 className={styled.headerCheckPasswordText}>Create new password</h2>
                                <InputPassword style={{marginBottom:"10px"}}/>
                            </FormLabel>
                            <FormGroup>
                                <p className={styled.text}>
                                    Create new password and we will send you further instructions to email
                                </p>
                            </FormGroup>
                            <div className={styled.buttonBlock}>
                                <Button
                                    title={'Create new password'}
                                    callBack={onClickButtonLoginHandler}
                                    className={styled.btnNewPass}
                                />
                            </div>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

