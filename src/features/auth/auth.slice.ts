import { createSlice } from "@reduxjs/toolkit";
import {
  authApi,
  LoginArgType,
  ProfileUserType,
  RegisterArgType,
} from "./auth.api";
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk";
import { isAxiosError } from "axios";
import { thunkTryCatch } from "../../common/utils/thunk-try-catch";

//REDUCER
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileUserType | null,
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
    // const { rejectWithValue } = thunkAPI;
    // try {
    //   const res = await authApi.register(arg);
    //   console.log(res.data.addedUser);
    // } catch (e) {
    //   // if (!isAxiosError(e)) return "an error has occurred";
    //   // console.error(e?.response?.data?.error);
    //   return rejectWithValue(e);
    // }

    return thunkTryCatch(thunkAPI, async () => {
      const res = await authApi.register(arg);
      return res.data;
    });
  }
);

const login = createAppAsyncThunk<
  { profile: ProfileUserType /*Что возвращает**/ },
  LoginArgType /*Что принимает**/
>("auth/login", async (arg, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const res = await authApi.login(arg);
  console.log(res.data);
  return { profile: res.data };
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register: registration, login };
