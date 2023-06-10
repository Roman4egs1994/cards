import { createSlice } from "@reduxjs/toolkit";
import {
  authApi,
  ForgotArgType,
  ForgotPassResponse,
  LoginArgType,
  meResponseLogout,
  ProfileUserType,
  RegisterArgType,
  SetNewPassResponse,
  SetNewPassType,
} from "./auth.api";
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk";
import { thunkTryCatch } from "../../common/utils/thunk-try-catch";
import { unhandledAction } from "../../common/actions";

//REDUCER
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileUserType | null,
    forgotPass: null as ForgotPassResponse | null,
    me: false,
    // inLogin: false,
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
        // state.inLogin = true;
      })
      .addCase(login.rejected, (state) => {
        state.me = false;
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.me = true;
        // state.inLogin = true;
        state.profile = action.payload.profile;
      })
      .addCase(authMe.rejected, (state, action) => {
        state.me = false;
      })
      .addCase(authMeLogOut.fulfilled, (state, action) => {
        // state.inLogin = false;
        state.me = false;
      });
  },
});

//THUNK
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

const forgotPassword = createAppAsyncThunk<ForgotPassResponse, ForgotArgType>(
  "auth/forgot",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.forgot(arg);
      return { forgotPass: res.data };
    });
  }
);

const setNewPassword = createAppAsyncThunk<SetNewPassResponse, SetNewPassType>(
  "auth/setNewPassword",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.setNewPassword(arg);
      return { setNewPass: res.data };
    });
  }
);

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

const authMeLogOut = createAppAsyncThunk<meResponseLogout, void>(
  "auth/meLogOut",
  async (_, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      return await authApi.meLogOut();
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
};
