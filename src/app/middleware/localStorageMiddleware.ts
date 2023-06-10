import { Middleware, PayloadAction } from "@reduxjs/toolkit";
import { saveStateToLocalStorage } from "../../common/utils/saveStateLocalStorage";
import { ForgotDataStatus } from "../../features/auth/auth.slice";

export const localStorageMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  <A extends PayloadAction>(action: A) => {
    const result = next(action);
    saveStateToLocalStorage(getState() as ForgotDataStatus);
    return result;
  };
