import React, { useState } from "react";

const useForm = (callback, validate) => {

    const [inputs, setInputs] = useState({
        subject: '',
        name: '',
        phone: '',
        description: ''
    });
    const [errors, setErrors] = useState({
        subject: '',
        name: '',
        phone: ''
    });
    const [isNotValidated, setIsNotValidated] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(inputs, errors));
        callback();
    }

    const handleChange = (event) => {
        setInputs(values  => ({ ...values, [event.target.name]: event.target.value }));
    }

    const handleBlur = (event) => {
        setInputs(values  => ({ ...values, [event.target.name]: event.target.value }));
        setErrors(validate({
            [event.target.name]: event.target.value
        }, errors));

        setIsNotValidated(disableButton());
    }

    const disableButton = () => {
        let disable = false;
        Object.keys(inputs).forEach(key => {
            if (key in errors) {
                if (inputs[key].trim() === ''
                    || (errors[key] !== '' && errors[key] !== null)) {
                    disable = true;
                }
            }
        });
        return disable;
    }

    const inputMask = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        // setInputs(formattedPhoneNumber);
        setInputs(values  => ({ ...values, [e.target.name]: formattedPhoneNumber }));
    }

    const formatPhoneNumber = (value) => {
        if (!value) {
            return value;
        }
        if (value.length > 1 && value[1] === '7') {
            value = value.slice(2);
        }
        const phoneNumber: string = value.replace(/\D/g, '');

        if (phoneNumber.length < 7) {
            return `+7 ${phoneNumber}`;
        }
        if (phoneNumber.length < 9) {
            return `+7 ${phoneNumber.slice(0, 6)}-${phoneNumber.slice(6, 8)}`;
        }
        return `+7 ${phoneNumber.slice(0, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
    }

    return {
        handleChange,
        handleSubmit,
        handleBlur,
        inputMask,
        inputs,
        errors,
        isNotValidated
    }
}

export default useForm;