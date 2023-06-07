import { createSlice } from "@reduxjs/toolkit";
import {
  authApi,
  ForgotArgType,
  ForgotPassResponse,
  LoginArgType,
  ProfileUserType,
  RegisterArgType,
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
    isLoading: false,
  },
  reducers: {
    // setProfile: (state, action: PayloadAction<{ profile: ProfileUserType }>) => {
    //   state.profile = action.payload.profile;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
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
    console.log(res.data);
    return { profile: res.data };
  });
});

const forgotPassword = createAppAsyncThunk<ForgotPassResponse, ForgotArgType>(
  "auth/forgot",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.forgot(arg);
      console.log(res.data);
      return { forgotPass: res.data };
    });
  }
);

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register: registration, login, forgotPassword };
