import { instance } from "../../common/api/common.api";

export const authApi = {
  register: (arg: RegisterArgType) => {
    return instance.post<RegisterResponseType>("auth/register", arg);
  },
  login: (arg: LoginArgType) => {
    return instance.post<ProfileUserType>("auth/login", arg);
  },
};

//Omit убери не нужное
//Pick какие типы выбрать
//Partial все типы будут не обяз

export type RegisterArgType = Omit<LoginArgType, "rememberMe">;
export type LoginArgType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterResponseType = {
  addedUser: AddedUserType;
};

export type AddedUserType = Omit<ProfileUserType, "token" | "tokenDeathTime">;
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
