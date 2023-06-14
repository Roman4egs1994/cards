import { createSlice } from "@reduxjs/toolkit";
import {
  authApi,
  ForgotArgType,
  ForgotPassResponseType,
  LoginArgType,
  MeReqRefactorNameAndLoginType,
  meResponseLogoutType,
  ProfileUserType,
  RegisterArgType,
  SetNewPassResponseType,
  SetNewPassType,
} from "./auth.api";
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk";
import { thunkTryCatch } from "../../common/utils/thunk-try-catch";
import { unhandledAction } from "../../common/actions";

export type ForgotDataStatus = "idle" | "sentForRestoration" | "restored";
//REDUCER
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileUserType | null,
    forgotPass: null as ForgotPassResponseType | null,
    forgotStatus: "idle" as ForgotDataStatus,
    me: false,
  },
  reducers: {
    // setProfile: (state, action: PayloadAction<{ profile: ProfileUserType }>) => {
    //   state.profile = action.payload.profile;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.me = true;
      })
      .addCase(login.rejected, (state) => {
        state.me = false;
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.me = true;
        state.profile = action.payload.profile;
      })
      // .addCase(authMe.rejected, (state, action) => {
      //   state.me = false;
      // })
      .addCase(authMeLogOut.fulfilled, (state, action) => {
        state.me = false;
      })
      //ЗАПИСЬ СОСТОЯНИЯ В LOCALSTORAGE
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.forgotStatus = "sentForRestoration";
        localStorage.setItem("password recovery status", JSON.stringify(state.forgotStatus));
      })
      .addCase(setNewPassword.fulfilled, (state) => {
        state.forgotStatus = "restored";
        localStorage.setItem("password recovery status", JSON.stringify(state.forgotStatus));
      })
      .addCase(authMeRefactoringLogin.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.name = action.payload.name;
        }
      });
  },
});

//THUNK

/**  РЕГИСТРАЦИЯ */
const registration = createAppAsyncThunk<any, RegisterArgType>(
  "auth/register",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // try {
    //   const res = await authApi.register(arg);
    //   console.log(res.data.addedUser);
    // } catch (e) {
    //   // if (!isAxiosError(e)) return "an error has occurred";
    //   // console.error(e?.response?.data?.error);
    //   return rejectWithValue(e);
    // }

    dispatch(unhandledAction);
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.register(arg);
      return res.data.addedUser;
    });
  }
);

/**  ВХОД ПО ЛОГИНУ */
const login = createAppAsyncThunk<
  { profile: ProfileUserType /*Что возвращает**/ },
  LoginArgType /*Что принимает**/
>("auth/login", async (arg, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  return thunkTryCatch(thunkAPI, async () => {
    const res = await authApi.login(arg);
    return { profile: res.data };
  });
});

/**  ВОССТАНОВИТЬ ПАРОЛЬ */
const forgotPassword = createAppAsyncThunk<ForgotPassResponseType, ForgotArgType>(
  "auth/forgot",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.forgot(arg);
      return { forgotPass: res.data };
    });
  }
);

/**  СОЗДАТЬ НОВЫЙ ПАРОЛЬ */
const setNewPassword = createAppAsyncThunk<SetNewPassResponseType, SetNewPassType>(
  "auth/setNewPassword",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.setNewPassword(arg);
      return { setNewPass: res.data };
    });
  }
);

/** ПРОВЕРКА НА АВТОРИЗАЦИЮ */
const authMe = createAppAsyncThunk<{ profile: ProfileUserType /*Что возвращает**/ }, void>(
  "auth/me",
  async (_, thunkAPI) => {
    return thunkTryCatch(
      thunkAPI,
      async () => {
        const res = await authApi.me();
        return { profile: res.data };
      },
      false
    );
  }
);

/** ВЫХОД ИЗ ЛОГИНА */
const authMeLogOut = createAppAsyncThunk<meResponseLogoutType, void>(
  "auth/meLogOut",
  async (_, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.meLogOut();
      return { logOut: res.data };
    });
  }
);

/** ПОМЕНЯТЬ ЛОГИН*/
const authMeRefactoringLogin = createAppAsyncThunk<{ name: string }, MeReqRefactorNameAndLoginType>(
  "auth/meRefactorLogin",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.meRefactoringNameAndAvatar(arg);
      return { name: res.data.updatedUser.name };
    });
  }
);

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = {
  register: registration,
  login,
  forgotPassword,
  setNewPassword,
  authMe,
  authMeLogOut,
  authMeRefactoringLogin,
};
