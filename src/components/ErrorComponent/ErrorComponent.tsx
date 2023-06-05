import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { appActions } from "../../app/app.slice";

export const ErrorComponent = () => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector((state) => state.app.error);

  useEffect(() => {
    // toast("Loaded successfully");
    if (authError) {
      toast.error(authError);
    }

    setTimeout(() => {
      dispatch(appActions.setError({ error: null }));
    }, 5000);
  }, [authError, dispatch]);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={""}
        theme="colored"
      />
    </>
  );
};
