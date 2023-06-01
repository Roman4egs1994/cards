import * as React from "react";
import s from "./Input.module.scss";
import { ChangeEvent } from "react";

type InputPropsType = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export const Input: React.FC<InputPropsType> = ({ className, label, ...props }) => {
  const styleInput = s.inputStyle + " " + className;

  return (
    <>
      <label className={s.labelBox}>{label}</label>
      <input className={styleInput} {...props} />
    </>
  );
};
