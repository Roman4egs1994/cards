import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { AppDispatch, RootState } from "../../app/store";
import { appActions } from "../../app/app.slice";

export const thunkTryCatch = async (
  thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>,
  promise: Function,
  showGlobalError?: boolean
) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(appActions.setIsLoading({ isLoading: true }));
  try {
    return await promise();
  } catch (error: any) {
    //Показ ошибки функцией thunkTryCatch
    // let errorMessage = "";
    // if (isAxiosError(e)) {
    //   errorMessage = e?.response?.data?.error || e.message;
    //   dispatch(appActions.setError({ error: errorMessage }));
    // } else if (e instanceof Error) {
    //   errorMessage = `Native error: ${e.message}`;
    //   dispatch(appActions.setError({ error: errorMessage }));
    // } else {
    //   errorMessage = JSON.stringify(e);
    //   dispatch(appActions.setError({ error: errorMessage }));
    // }

    return rejectWithValue({ error: error, showGlobalError });
  } finally {
    dispatch(appActions.setAppInitialized({ isAppInitialized: true }));
  }
};
