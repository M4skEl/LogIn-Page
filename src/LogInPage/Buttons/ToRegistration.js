import React from "react";
import './ToRegistration.css';

export {ToRegistrationButton};

function ToRegistrationButton() {
    return (
        <div>
            <a className="ToRegistration" href="src/LogInPage/App">
                <button className="ToRegistrationButton">New here? Sign in)</button>
            </a>
        </div>
    )
}