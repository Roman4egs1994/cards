import { instance } from "../../common/api/common.api";

export const authApi = {
  register: (arg: RegisterArgType) => {
    return instance.post<RegisterResponseType>("auth/register", arg);
  },
  login: (arg: LoginArgType) => {
    return instance.post<ProfileUserType>("auth/login", arg);
  },
  forgot: (arg: ForgotArgType) => {
    return instance.post<ForgotPassResponse>("/auth/forgot", arg);
  },
  setNewPassword: (arg: SetNewPassType) => {
    return instance.post("/auth/set-new-password");
  },
};

//Omit убери не нужное
//Pick какие типы выбрать
//Partial все типы будут не обяз

//отправляем на создание нового пароля
type SetNewPassType = {
  password: string;
  resetPasswordToken: string;
};

//отправляем на восстановление пароля
export type ForgotArgType = Pick<LoginArgType, "email"> & {
  messages: string;
  from?: string;
};

//отправляем на регистрацию
export type RegisterArgType = Omit<LoginArgType, "rememberMe">;

//отправляем на вход в логин
export type LoginArgType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

//Получаем после регистрации
export type RegisterResponseType = {
  addedUser: AddedUserType;
};

//Получаем после регистрации
export type AddedUserType = Omit<ProfileUserType, "token" | "tokenDeathTime">;

//Получаем user при логинизации
export type ProfileUserType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};

export type ForgotPassResponse = {
  info: string;
  success: boolean;
  answer: boolean;
  html: boolean;
};
