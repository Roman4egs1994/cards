import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./features/auth/SignIn/SignIn";
import { SignUp } from "./features/auth/SignUp/SignUp";
import { ForgotPassword } from "./features/auth/ForgotPassword/ForgotPassword";
import { CheckEmail } from "./features/auth/ForgotPassword/CheckEmail/CheckEmail";
import { Profile } from "./features/Profile/Profile";

const container = document.getElementById("root")!;
const root = createRoot(container);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <App>
        <SignIn />
      </App>
    ),
  },
  {
    path: "/register",
    element: (
      <App>
        <SignUp />
      </App>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <App>
        <ForgotPassword />
      </App>
    ),
  },
  {
    path: "/forgot-password/check-email",
    element: (
      <App>
        <CheckEmail />
      </App>
    ),
  },
  {
    path: "/profile",
    element: (
      <App>
        <Profile />
      </App>
    ),
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
