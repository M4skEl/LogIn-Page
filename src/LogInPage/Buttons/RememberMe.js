import React, {useState} from "react";

import './RememberMe.css'

export {RememberCheckBox}

function RememberCheckBox() {
    const [isRemember, setIsRemember] = useState(false);

    function changeCheckbox() {
        setIsRemember(!isRemember)
    }

    return (
        <div className="RememberMe">
            <label htmlFor='remember' className='checkRemember'>
                <input className="checkboxInput" type='checkbox' checked={isRemember} onChange={changeCheckbox}
                       id="remember"/>
                <svg className="checkboxIcon" viewBox="0 -7 10 26">
                    <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3"/>
                    <path className="tick" stroke="#6EA340" fill="none" strokeLinecap="round" strokeWidth="4"
                          d="M4 10l5 5 9-9"/>
                </svg>
                <span className="checkboxLabel"> Remember me</span>
            </label>
        </div>
    )
}