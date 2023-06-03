import { createSlice } from "@reduxjs/toolkit";
import { authApi, LoginArgType, ProfileUserType, RegisterArgType } from "./auth.api";
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk";

//REDUCER
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileUserType | null,
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
      })
      .addCase(registration.fulfilled, (state, action) => {});
  },
});

//THUNK
export const registration = createAppAsyncThunk<void, RegisterArgType>("auth/register", async (arg) => {
  const res = await authApi.register(arg);
  return console.log(res.data.addedUser);
});

export const login = createAppAsyncThunk<
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
