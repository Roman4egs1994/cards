import React from "react";
import styled from "./Button.module.scss";

type ButtonPropsType = {
  callBack: () => void;
  title: string;
  className?: string;
  style?: object;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonPropsType> = (props) => {
  const { callBack, title, className, style, type, ...otherProps } = props;

  const styleButton = styled.button + " " + className;

  const onclickBtnHandler = () => {
    callBack();
  };

  return (
    <button type={type} style={style} onClick={onclickBtnHandler} className={styleButton}>
      {title}
    </button>
  );
};
