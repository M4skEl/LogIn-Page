import React, {useState} from "react";
import {logIn, tokenSave} from "../../utils/api-client";

import './LoginButton.css'

export {SubmitButton}

function SubmitButton(props) {

    const [dataSent, setDataSent] = useState(false);
    const [incorrectData, setIncorrectData] = useState(false);

    const sentDataToSever = (email, password) => {

        setDataSent(true);

        logIn(email.toString(), password.toString(), setDataSent, true)
            .then((response) => {
                tokenSave(response);

                alert("Token: " + response.token.toString() + '\n'
                    + "Expires: " + response.expires.toString());
                setIncorrectData(false)
            })
            .catch((response) => {
                alert("Code " + response.code.toString() + '\n'
                    + "Description: " + response.description.toString());
                setIncorrectData(true);
            })

    }

    return (
        <div>{incorrectData && <div className='incorrectDataSent'>Incorrect email or password</div>}
            <button
                className="LogInButton"
                disabled={!(props.check) || dataSent}
                type='submit'
                onClick={() => sentDataToSever(props.email.value, props.password.value)
                }
            >
                {dataSent && <div>Loading</div>}
                {!dataSent && <div>Login to your account</div>}
            </button>
        </div>
    )
}