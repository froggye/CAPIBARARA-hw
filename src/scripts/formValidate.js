'use strict';

const checkPattern = {
    'fsubject': {
        pattern: /^(.*){1,1000}$/g,
        errorMessage: 'Subject too long (maximum length of 1000 characters)'
    },
    'fname': {
        pattern: /^[a-zA-Z \-]+$/g,
        errorMessage: 'Name may only contain letters'
    },
    'fphone': {
        pattern: /^(\+7\s)([0-9]{6})-([0-9]{2})-([0-9]{2})$/,
        errorMessage: 'Invalid phone format'
    }
};

const formInputs = document.forms["userInput"].querySelectorAll("[required]");
const formButton = document.getElementById('form-button');

formInputs.forEach(input => {
    input.pattern = checkPattern[input.name].pattern.source;
});


const phoneInputField = document.getElementById('fphone');

function formatPhone(value) {
    if (!value) return value;
    if (value.length > 1 && value[1] === '7') {
        value = value.slice(2);
    }
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length < 7) {
        return `+7 ${phoneNumber}`;
    }
    if (phoneNumber.length < 9) {
        return `+7 ${phoneNumber.slice(0, 6)}-${phoneNumber.slice(6, 8)}`;
    }
    return `+7 ${phoneNumber.slice(0, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
}

phoneInputField.addEventListener("keydown", (event) => {
    // Allow: backspace, delete, Ctrl+A, home, end, left, right
    if (event.keyCode === 46 ||
        event.keyCode === 8 ||
        (event.keyCode === 65 && event.ctrlKey === true) ||
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        return;
    }
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
        (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
    }
    if (phoneInputField.value.length > 14) {
        event.preventDefault();
    }
});

phoneInputField.addEventListener("keyup", function(){
    phoneInputField.value = formatPhone(phoneInputField.value);
});


const errorsFields = {};

function createError(text, input) {
    if (errorsFields[input.name]) return;

    const errorElement = document.createElement('p');
    errorElement.innerText = text;

    errorElement.className = 'body3 request-form__error-label';
    input.classList.add('request-form__form-field--error');
    const formLabel = input.parentNode.children[0];
    formLabel.classList.add('request-form__form-label--error');

    input.parentNode.appendChild(errorElement);
    errorsFields[input.name] = errorElement;
}

function removeError(input) {
    errorsFields[input.name] = null;
    input.classList.remove('request-form__form-field--error');
    const formLabel = input.parentNode.children[0];
    formLabel.classList.remove('request-form__form-label--error');
}

function enableButton() {
    let disable = false;
    formInputs.forEach(input => {
        if (!input.value || !RegExp(input.pattern).test(input.value)) {
            disable = true;
        }
    });
    formButton.disabled = disable;
}


function validate(inputEvent) {

    const input = inputEvent.target;
    const inputError = errorsFields[input.name];

    if (!input.value) {
        createError('This field is required', input);
    }
    else if (!RegExp(input.pattern).test(input.value)) {
        createError(checkPattern[input.name].errorMessage, input);
    }
    else {
        inputError?.remove();
        removeError(input);
    }

    enableButton();
}

formInputs.forEach(input => input.addEventListener('blur', validate));


formButton.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(document.forms["userInput"]);

    for (const [key, value] of formData) {
        console.log(key, value);
    }
});