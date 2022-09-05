import {useEffect, useState} from "react";


export {useInput}

const useValidation = (value, validations) => {
    //Проверка полей
    const [isEmpty, setEmpty] = useState(true);
    const [minLength, setMinLength] = useState(false);
    const [emailError, setEmailError] = useState(false);

    //Отключение кнопки
    const [submitEnable, setSubmitEnable] = useState(false);

    // Сообщение об ошибке всегда одно - самое значимое
    const [message, setMessage] = useState('')

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLength(true);
                        setMessage('Длина должна быть больше')
                    } else {
                        setMinLength(false)
                    }

                case 'isEmpty':
                    if (value) {
                        setEmpty(false)
                    } else {
                        setEmpty(true);
                        setMessage('Обязательное поле')
                    }
                    break

                case 'isEmail':
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (re.test(String(value).toLowerCase())) {
                        setEmailError(false)
                    } else {
                        setEmailError(true);
                        setMessage('Email не корректен')
                    }
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLength || emailError) {
            setSubmitEnable(false)
        } else {
            setSubmitEnable(true)
        }
    }, [isEmpty, minLength, emailError])
    return {
        isEmpty,
        minLength,
        message,
        emailError,
        submitEnable,
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)

    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }
    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
}
