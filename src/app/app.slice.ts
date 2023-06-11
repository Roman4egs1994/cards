import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { authThunks } from "../features/auth/auth.slice";

const appInitialState = {
  error: null as string | null,
  isLoading: false,
  isAppInitialized: false,
  unhandledActions: [] as Array<any>,
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
    setAppInitialized: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
      state.isAppInitialized = action.payload.isAppInitialized;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authThunks.authMe.fulfilled, (state, action) => {
      state.isAppInitialized = true;
    });
    builder.addCase(authThunks.authMe.rejected, (state, action) => {
      state.isAppInitialized = true;
    });
    builder.addCase(authThunks.authMe.pending, (state, action) => {
      state.isAppInitialized = false;
    });
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/pending");
      },
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/rejected");
      },
      (state, action) => {
        state.isLoading = false;

        const { error, showGlobalError = false } = action.payload;

        let errorMessage = "";
        if (isAxiosError(error)) {
          if (
            error?.response?.status === 401 &&
            !showGlobalError
            // error?.request.responseURL.endsWith("/me")
          ) {
            console.error(error);
            return;
          }

          errorMessage = error?.response?.data?.error || error.message;
          state.error = errorMessage;
        } else if (error instanceof Error) {
          errorMessage = `Native error: ${error.message}`;
          state.error = errorMessage;
        } else {
          errorMessage = JSON.stringify(error);
          state.error = errorMessage;
        }
      }
    );
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/fulfilled");
      },
      (state) => {
        state.isLoading = false;
      }
    );
    builder.addDefaultCase((state, action) => {
      console.log("hello this is default case", action.type);
      state.unhandledActions.push(action);
    });
  },
  // extraReducers: (builder) => {
  //   builder.addCase(authThunks.register.rejected, (state, action) => {
  //     state.isLoading = true;
  //     state.appActions.setIsLoading = true
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
