import './LogInPage.css';
import '../index.js';
import React, {useEffect, useState} from "react";

import {LoginForm} from "./LogItems/LogInput";

import {useInput} from "./Validation/Validation";

import {PasswordForm} from "./PasswordItems/PasswordInput";

import {SubmitButton} from "./Buttons/LoginButton";

import {ForgotPasswordButton} from "./Buttons/ForgotPasswordButton";

import {RememberCheckBox} from "./Buttons/RememberMe";

import {ToRegistrationButton} from "./Buttons/ToRegistration";

function LoginFormHeader() {
    return (
        <div>
            <h1 className="FormHeader">LOG IN</h1>
        </div>
    );
}

function OnlyEnter(props) {

    const password = useInput('', {isEmpty: true, minLength: 6});
    const email = useInput('', {isEmpty: true, minLength: 5, isEmail: false});

    const [enableButtonPassword, setEnableButtonPassword] = useState(false);
    const [enableButtonEmail, setEnableButtonEmail] = useState(false);

    const setEnablePassword = (bool) => {
        setEnableButtonPassword(bool)
    }
    const setEnableEmail = (bool) => {
        setEnableButtonEmail(bool)
    }
    const [totalEnable, setTotalEnable] = useState(false);
    useEffect(() => {
        setTotalEnable((enableButtonEmail && enableButtonPassword));
    })


    return (
        <div className='OnlyEnter'>
            <LoginForm email={email} enable={setEnableEmail}/>
            <PasswordForm password={password} enable={setEnablePassword}/>
            <SubmitButton check={totalEnable} email={email} password={password}/>
        </div>
    )
}









function LogIn() {
    return (


        <div className="MyForm">
            <LoginFormHeader/>
            <OnlyEnter/>
            <div className="UnderLoginButton">
                <RememberCheckBox/>
                <ForgotPasswordButton/>
            </div>
            <ToRegistrationButton/>
        </div>

    )

}

export {LogIn};
