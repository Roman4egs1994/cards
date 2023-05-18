import React from 'react';
import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import styled from "./InputPassword.module.scss"

type InputPasswordPropsType = {
    style?: object
}


export const InputPassword:React.FC<InputPasswordPropsType> = (props) => {
    const {style, ...otherProps} = props

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <FormControl
                variant="standard"
                className={styled.inputPassword}
                style = {style}
            >
                <InputLabel
                    style={{fontSize: "13px"}}
                    htmlFor="standard-adornment-password">Password
                </InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    );
};

