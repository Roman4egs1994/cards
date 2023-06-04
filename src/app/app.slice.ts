import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const appInitialState = {
  error: null as string | null,
  isLoading: false,
  isAppInitialized: false,
};

// type AppInitialStateType = typeof appInitialState;

const slice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setAppInitialized: (
      state,
      action: PayloadAction<{ isAppInitialized: boolean }>
    ) => {
      state.isAppInitialized = action.payload.isAppInitialized;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(authThunks.register.rejected, (state, action) => {
  //     state.isLoading = true;
  //     // state.appActions.setIsLoading = true
  //     if (!isAxiosError(action.payload)) {
  //       state.isLoading = true;
  //       state.error = "an error has occurred";
  //       toast("an error has occurred");
  //       return;
  //     }
  //     state.error = action.payload?.response?.data?.error;
  //     toast.error(action.payload?.response?.data?.error);
  //     state.isLoading = true;
  //   });
  //   builder.addCase(authThunks.login.rejected, (state, action) => {
  //     state.isLoading = true;
  //     // state.appActions.setIsLoading = true
  //     if (!isAxiosError(action.payload)) {
  //       state.isLoading = true;
  //       state.error = "an error has occurred";
  //       toast.error("an error has occurred");
  //       return;
  //     }
  //     state.error = action.payload?.response?.data?.error;
  //     toast.error(action.payload?.response?.data?.error);
  //     state.isLoading = true;
  //   });
  // },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
