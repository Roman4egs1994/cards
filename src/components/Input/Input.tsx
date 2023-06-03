// import * as React from "react";
//
//
// type InputPropsType = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };
//
// export const Input: React.FC<InputPropsType> = ({ className, label, ...props }, ref) => {
//   const styleInput = s.inputStyle + " " + className;
//
//   return (
//     <div>
//       <label className={s.labelBox}>{label}</label>
//       <input type={props.type} className={styleInput} {...props} />
//     </div>
//   );
// };

import React, { forwardRef, InputHTMLAttributes } from "react";
import s from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const styleInput = s.inputStyle + " " + s.className;

  return (
    <>
      <label className={s.labelBox} htmlFor={props.name}>
        {props.label}
      </label>
      <input type={props.type} className={styleInput} {...props} ref={ref} />
    </>
  );
});
