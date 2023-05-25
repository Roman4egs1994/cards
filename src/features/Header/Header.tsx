import React from 'react';
import styled from  './Header.module.scss'
import styleStartContainer from '../../common/styles/Container.module.scss'
import logo from '../../common/image/icon/logo.8a063c2a.svg'
import {Button} from "../../components/Button/Button";
import {Navigate} from "react-router-dom";
import {Login} from "../Auth/Login/Login";

export const Header = () => {

    const headerContainer = styleStartContainer.container + " " + styled.headerContainer

    const onClickBtnSignIn = () => {
        return <Navigate to={'/login'}/>
    }

    return (
        <header className={styled.headerBlock}>
            <div className={headerContainer}>
                <img src={logo} alt="logo"/>

                {/*ЕСЛИ НЕ ЗАЛОГИНЕНЫ*/}
                <Button
                    callBack={onClickBtnSignIn}
                    title={"Sign In"}
                    className={styled.buttonSignIn}
                />

                {/*ЕСЛИ МЫ ЗАЛОГИНЕНЫ*/}
                {/*<div className={styled.loginTrue}>*/}
                {/*    <p className={styled.nameLogin}>Roman</p>*/}
                {/*    <img src="" alt=""/>*/}
                {/*</div>*/}
            </div>
        </header>
    );
};

