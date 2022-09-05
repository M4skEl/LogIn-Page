import React from "react";

import './ForgotPassword.css'

export {ForgotPasswordButton}

function ForgotPasswordButton() {
    return (
        <div>
            <a className="ForgotPassword" href="src/LogInPage/App">
                <button className="ForgotPasswordButton">Forgot Password</button>
            </a>
        </div>
    )
}
