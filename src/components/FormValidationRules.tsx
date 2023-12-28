
const validate = (values, errors) => {

    type InputValues = {
        [key: string]: {
            pattern: RegExp,
            errorMessage: string
        }
    }

    const initial: InputValues = {
        subject: {
            pattern: /^(.*){1,1000}$/g,
            errorMessage: 'Subject too long (maximum length of 1000 characters)'
        },
        name: {
            pattern: /^[a-zA-Z \-]+$/g,
            errorMessage: 'Name may only contain letters'
        },
        phone: {
            pattern: /^(\+7\s)([0-9]{6})-([0-9]{2})-([0-9]{2})$/,
            errorMessage: 'Invalid phone format'
        }
    };

    Object.keys(values).filter(function(key) {
        return initial[key];
    }).map(function(key) {
        if (!values[key]) {
            errors[key] = 'This field is required';
        }
        else if (!initial[key].pattern.test(values[key])) {
            errors[key] = initial[key].errorMessage;
        }
        else {
            errors[key] = null;
        }
    });

    return errors;
}

export default validate;

