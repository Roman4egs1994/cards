import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, RegisterDataParamsType } from "./auth.api";

const register = createAsyncThunk("auth/register", (arg: RegisterDataParamsType, thunkAPI) => {
  const { dispatch, getState, rejectWithValue } = thunkAPI;

  authApi.register(arg).then((res) => {});
});

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export const authReducer = slice.reducer;
export const authThunks = { register };
