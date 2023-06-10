import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { appReducer } from "./app.slice";
import { authReducer } from "../features/auth/auth.slice";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: JSON.parse(localStorage.getItem("reduxState") || "{}"),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// @ts-ignore
window.store = store;
