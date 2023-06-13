import React, { ChangeEvent, useState } from "react";
import { TextField } from "@mui/material";
import styled from "./EditableLogin.module.scss";
import iconPen from "../../../common/image/icon/pen.png";
import { Button } from "../../../components/Button/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type EditableLoginPropsType = {
  login: string;
  callBack: (newLogin: string) => void;
};

type LoginFormType = {
  login: string;
};

const schema = yup.object().shape({
  login: yup.string().required(),
});

export const EditableLogin = (props: EditableLoginPropsType) => {
  const [edit, setEdit] = useState(false);
  // const [newLogin, setNewLogin] = useState(props.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: "onBlur",
    defaultValues: {
      login: props.login,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormType) => {
    props.callBack(data.login);
    setEdit(false);
  };

  // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNewLogin(e.currentTarget.value);
  //  ;
  // };

  const onClickClickHandler = () => {
    setEdit(!edit);
  };

  return edit ? (
    <div className={styled.blockInputLogin}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styled.inputLogin}
          id="standard-basic"
          variant="standard"
          color={"primary"}
          label={"Nickname"}
          {...register("login")}
          error={!!errors.login}
          helperText={errors.login?.message}
          autoFocus
        />
        <Button type={"submit"} className={styled.btnSaveLogin} title={"SAVE"} />
      </form>
    </div>
  ) : (
    <div className={styled.blockRefactoringLogin}>
      <p>{props.login}</p>
      <img onClick={onClickClickHandler} src={iconPen} alt="pen" />
    </div>
  );
};
