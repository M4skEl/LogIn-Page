import React, {useEffect} from "react";

import './PasswordInput.css';

export {PasswordForm};

function PasswordForm(props) {

    /*const password = useInput('', {isEmpty: true, minLength: 6});*/

    useEffect(() => {
        props.enable(props.password.submitEnable);
    })


    return (
        <div className="text-field">

            {(props.password.isDirty && (props.password.isEmpty || props.password.minLength)) &&
                <div className='Error'>{props.password.message}</div>}

            <div className="text-field_icon_password">
                <input
                    className="PasswordInput" type="password" placeholder="🔒 Password..."
                    onChange={e => props.password.onChange(e)}
                    onBlur={e => props.password.onBlur(e)}
                    value={props.password.value}
                />
                <img role="img" className="passwordPicture"/>
            </div>
        </div>
    )
}