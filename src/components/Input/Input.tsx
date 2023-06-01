import * as React from "react";
import s from "./Input.module.scss";

export type InputPropsType = {
  type?: string;
  className?: string;
  onChange?: () => void;
  placeholder?: string;
  label?: string;
};

export const Input: React.FC<InputPropsType> = (props) => {
  const { label, type, className, onChange, placeholder, ...otherProps } = props;
  const styleInput = s.inputStyle + " " + className;

  const onChangeInputHandler = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <>
      <label className={s.labelBox}>{label}</label>
      <input
        type={type}
        className={styleInput}
        onChange={onChangeInputHandler}
        placeholder={placeholder}
        {...otherProps}
      />
    </>
  );
};
