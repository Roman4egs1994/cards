import React from 'react';
import styled from './Main.module.scss'
import styleStartContainer from "../../common/styles/Container.module.scss";
import {Login} from "../Auth/Login/Login";
import {SignUp} from "../Auth/SignUp/SignUp";
import {ForgotPassword} from "../Auth/ForgotPassword/ForgotPassword";
import {CheckEmail} from "../Auth/ForgotPassword/CheckEmail/CheckEmail";
import {CreateNewPassword} from "../Auth/ForgotPassword/NewPass/CreateNewPassword";
import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";


export const Main = () => {

    const mainContainer = styleStartContainer.container + " " + styled.mainContainer

    return (
        <main className={styled.mainBlock}>
            <div className={mainContainer}>

                {/*<Login/>*/}
                {/*<SignUp/>*/}
                {/*<ForgotPassword/>*/}
                {/*<CheckEmail/>*/}
                {/*<CreateNewPassword/>*/}


                    <Profile/>


            </div>
        </main>
    );
};
