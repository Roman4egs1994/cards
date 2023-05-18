import React from 'react';
import styled from  './Button.module.scss'



type ButtonPropsType = {
    callBack:()=> void
    title: string
    className? : string
    style?: object
}




export const Button:React.FC<ButtonPropsType> = (props) => {
    const {callBack,title, className,style, ...otherProps} = props

    const styleButton = styled.button + " " + className

    const onclickBtnHandler = () => {
        callBack()
    }


    return (
        <button style={style}  onClick={onclickBtnHandler} className={styleButton}>{title}</button>
    );
};

