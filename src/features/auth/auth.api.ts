import { instance } from "../../common/api/common.api";

export const authApi = {
  register: (arg: RegisterDataParamsType) => {
    return instance.post("auth/register", arg);
  },
  login: (data: LoginDataParamsType) => {
    return instance.post("login/api", data);
  },
};

export type RegisterDataParamsType = {
  email: string;
  password: string;
};
type LoginDataParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
