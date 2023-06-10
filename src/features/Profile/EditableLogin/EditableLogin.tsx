import React, { ChangeEvent, useState } from "react";
import { TextField } from "@mui/material";
import styled from "./EditableLogin.module.scss";
import iconPen from "../../../common/image/icon/pen.png";
import { Button } from "../../../components/Button/Button";

type EditableLoginPropsType = {
  login: string;
  callBack: (newTitle: string) => void;
};

export const EditableLogin = (props: EditableLoginPropsType) => {
  const [edit, setEdit] = useState(false);
  const [newLogin, setNewLogin] = useState(props.login);

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLogin(e.currentTarget.value);
    props.callBack(newLogin);
  };

  const onClickClickHandler = () => {
    setEdit(!edit);
  };

  return edit ? (
    <div className={styled.blockInputLogin}>
      <TextField
        className={styled.inputLogin}
        id="standard-basic"
        variant="standard"
        color={"primary"}
        label={"Nickname"}
        value={newLogin}
        onChange={onChangeInputHandler}
        // onBlur={onClickClickHandler}
        autoFocus
      />
      <Button className={styled.btnSaveLogin} callBack={onClickClickHandler} title={"SAVE"} />
    </div>
  ) : (
    <div className={styled.blockRefactoringLogin}>
      <p>{props.login}</p>
      <img onClick={onClickClickHandler} src={iconPen} alt="pen" />
    </div>
  );
};
