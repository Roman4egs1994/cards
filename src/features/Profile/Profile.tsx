import React, {ChangeEvent, useState} from 'react';
import styled from './Profile.module.scss'
import arrow from '../../common/image/icon/Arrow.png'
import styleStartContainer from "../../common/styles/Container.module.scss";
import photoProfile from '../../common/image/photoProfile.jpg'
import {TextField} from "@mui/material";
import {EditableLogin} from "./EditableLogin/EditableLogin";
import {elGR} from "@mui/material/locale";
import {Button} from "../../components/Button/Button";

type ProfileType = {
    photo: string
    login: string
    mail: string
}


export const Profile = () => {

    const [login, setLogin] = useState<ProfileType[]>([
        {photo: photoProfile, login: "roman", mail:"romanmoisidi@gmail.com"}
    ])

    const onClickRefactoringLogin = (newLogin: string) => {
        setLogin(login.map((el) => ({...el, login: newLogin})))
    }

    const onClickLogoutProfile = () => {

    }

    return (
        <>
            <div className={styled.profileBlock}>
                <div className={styled.toBack}>
                    <img src={arrow} alt=""/>
                    <p>Back to Packs List</p>
                </div>
                <div className={styled.flexProfile}>
                    <div className={styled.cardProfile}>
                        <p className={styled.textHeader}>Personal Information</p>
                        {login.map((el,index) => {
                            return (
                                <>
                                    <div key={index} className={styled.photoProfile}>
                                        <img src={el.photo} alt=""/>
                                    </div>
                                    <div className={styled.nameLogin}>
                                        <EditableLogin login={el.login} callBack={onClickRefactoringLogin}/>
                                    </div>
                                    <div className={styled.mail}>
                                        <p>{el.mail}</p>
                                    </div>
                                </>
                            )
                        })}
                         <Button className={styled.btnLogOut} callBack={onClickLogoutProfile} title={'Log out'}/>
                    </div>
                </div>
            </div>
        </>
    );
};
