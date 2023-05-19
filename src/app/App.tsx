import React from "react";
import styled from './App.module.scss'

// import "./App.css";
import {Login} from "../features/Auth/Login/Login";
import {SignUp} from "../features/Auth/SignUp/SignUp";
import {ForgotPassword} from "../features/Auth/ForgotPassword/ForgotPassword";
import {CheckEmail} from "../features/Auth/ForgotPassword/CheckEmail/CheckEmail";
import {CreateNewPassword} from "../features/Auth/ForgotPassword/NewPass/CreateNewPassword";
import {Header} from "../features/Header/Header";
import {Tabs} from "../features/Header/Tabs/Tabs";


function App() {
    return (
        <div className={styled.App}>
            {/*<header className="App-header">*/}
            {/*    /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
            {/*    /!*<Counter />*!/*/}
            {/*    /!*<p>*!/*/}
            {/*    /!*  Edit <code>src/App.tsx</code> and save to reload.ya*!/*/}
            {/*    /!*</p>*!/*/}
            {/*    /!*<span>*!/*/}
            {/*    /!*  <span>Learn </span>*!/*/}
            {/*    /!*  <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">*!/*/}
            {/*    /!*    React*!/*/}
            {/*    /!*  </a>*!/*/}
            {/*    /!*  <span>, </span>*!/*/}
            {/*    /!*  <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">*!/*/}
            {/*    /!*    Redux*!/*/}
            {/*    /!*  </a>*!/*/}
            {/*    /!*  <span>, </span>*!/*/}
            {/*    /!*  <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">*!/*/}
            {/*    /!*    Redux Toolkit*!/*/}
            {/*    /!*  </a>*!/*/}
            {/*    /!*  ,<span> and </span>*!/*/}
            {/*    /!*  <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">*!/*/}
            {/*    /!*    React Redux*!/*/}
            {/*    /!*  </a>*!/*/}
            {/*    /!*</span>*!/*/}

                {/*<Login/>*/}
                {/*<SignUp/>*/}
                {/*<ForgotPassword/>*/}
                {/*<CheckEmail/>*/}
                {/*<CreateNewPassword/>*/}
            {/*</header>*/}


            <Header/>
        </div>
    );
}

export default App;
