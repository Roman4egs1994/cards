import { instance } from "../../common/api/common.api";
import { string } from "yup";

export const authApi = {
  register: (arg: RegisterArgType) => {
    return instance.post<RegisterResponseType>("auth/register", arg);
  },
  login: (arg: LoginArgType) => {
    return instance.post<ProfileUserType>("auth/login", arg);
  },
  forgot: (arg: ForgotArgType) => {
    return instance.post<ForgotPassResponseType>("/auth/forgot", arg);
  },
  setNewPassword: (arg: SetNewPassType) => {
    return instance.post<SetNewPassResponseType>("/auth/set-new-password", arg);
  },
  me: () => {
    return instance.post<ProfileUserType>("/auth/me");
  },
  meLogOut: () => {
    return instance.delete<meResponseLogoutType>("/auth/me");
  },
  meRefactoringNameAndAvatar: (arg: MeReqRefactorNameAndLoginType) => {
    return instance.put<MeResponseEditProfileType>("/auth/me", arg);
  },
};

//Omit убери не нужное
//Pick какие типы выбрать
//Partial все типы будут не обяз

export type MeReqRefactorNameAndLoginType = {
  name?: string;
  avatar?: string; //
};

export type MeResponseEditProfileType = {
  updatedUser: MeResEditProfileTypeUpdatedUser;
  token: string;
  tokenDeathTime: number;
};
export type MeResEditProfileTypeUpdatedUser = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  avatar: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};

export type meResponseLogoutType = {
  info: string;
};

export type meResponse = {
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
  avatar?: string;
};

//отправляем на создание нового пароля
export type SetNewPassType = {
  password: string;
  resetPasswordToken: string;
};

export type SetNewPassResponseType = {
  info: string;
};

//отправляем на восстановление пароля
export type ForgotArgType = Pick<LoginArgType, "email"> & {
  message: string;
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
  avatar?: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};

export type ForgotPassResponseType = {
  info: string;
  success: boolean;
  answer: boolean;
  html: boolean;
};
