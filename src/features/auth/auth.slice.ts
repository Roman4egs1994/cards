import { createSlice } from "@reduxjs/toolkit";
import { authApi, LoginArgType, ProfileUserType, RegisterArgType } from "./auth.api";
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk";
import { isAxiosError } from "axios";

//REDUCER
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileUserType | null,
    isLoading: false,
    error: null as null | string,
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
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = true;
        if (!isAxiosError(action.payload)) {
          state.error = "an error has occurred";
          return;
        }
        state.error = action.payload?.response?.data?.error;
        state.isLoading = false;
      });
  },
});

//THUNK
export const registration = createAppAsyncThunk<any, RegisterArgType>("auth/register", async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await authApi.register(arg);
    console.log(res.data.addedUser);
  } catch (e) {
    // if (!isAxiosError(e)) return "an error has occurred";
    // console.error(e?.response?.data?.error);

    return rejectWithValue(e);
  }
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
