import React, {useEffect, useState} from "react";

import './LogInput.css'

import {useInput} from "../Validation/Validation";


export {LoginForm}

function LoginForm(props) {

    useEffect(() => {
        props.enable(props.email.submitEnable)
    })

    return (
        <div className="text-field">
            {(props.email.isDirty && (props.email.isEmpty || props.email.minLength || props.email.emailError)) &&
                <div className='Error'>{props.email.message}</div>}

            <div className="text-field_icon_email">
                <input
                    className="LoginInput" type="text" placeholder="✉ Email..."
                    onChange={e => props.email.onChange(e)}
                    onBlur={e => props.email.onBlur(e)}
                    value={props.email.value}
                />
                <img role="img" className="MailPicture"/>
            </div>
        </div>
    )
}