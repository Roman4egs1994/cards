import React, { ReactNode } from "react";
import styled from "./AuthContainer.module.scss";

type AuthContainerTypeProps = {
  children?: ReactNode;
  classNameAuthContainer?: string;
  textTitle?: string;
  styleBottomTitleText?: object;
};

export const AuthContainer: React.FC<AuthContainerTypeProps> = (props) => {
  const { children, classNameAuthContainer, textTitle, styleBottomTitleText, ...otherProps } = props;

  const stylesAuthContainer = styled.stylesAuthContainer + " " + classNameAuthContainer;

  return (
    <div className={stylesAuthContainer}>
      <div className={styled.container}>
        <div style={styleBottomTitleText} className={styled.titleBlock}>
          <p className={styled.textTitle}>{textTitle}</p>
        </div>
        <div className={styled.inputBlock}>{children}</div>
      </div>
    </div>
  );
};
