import React from 'react';
import {FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import styled from "../../Login/Login.module.scss";
import {InputPassword} from "../../../../components/InputPassword/InputPassword";
import {Button} from "../../../../components/Button/Button";


export const CheckEmail = () => {

    const onClickButtonLoginHandler = () => {

    }

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form className={styled.loginForm}>
                        <FormControl>
                            <FormLabel>
                                <h2 className={styled.headerLogin} style={{fontWeight: "900"}}>it-incubator</h2>
                            </FormLabel>
                            <FormGroup>
                                <div>
                                    
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

