import React, { useState } from "react";
import useForm from "./useForm";
import validate from './FormValidationRules';

const Form = () => {

    const {
        inputs,
        inputMask,
        errors,
        isNotValidated,
        handleChange,
        handleSubmit,
        handleBlur} = useForm(login, validate);

    function login() {
        Object.keys(inputs).map((key) => {
            console.log(key, inputs[key]);
        })
    }

    return (
        <section className="container request-form" id="request-form">
            <div className="request-form__text">
                <h2 className="header1">
                    Contact Capibarara
                </h2>
                <p className="subtitle">
                    Do you wanna chat with Capibarara? Then send the request!
                </p>
            </div>
            <form className="request-form__form drop-shadow--lg"
                  id="user-input" name="userInput"
                  onSubmit={handleSubmit}>
                <div className="request-form__input-wrapper">
                    <label htmlFor="subject" className={`request-form__form-label body3 ${errors.subject && 'request-form__form-label--error'}`}>
                        Subject*
                    </label>
                    <input className={`request-form__form-field body1 ${errors.subject && 'request-form__form-field--error'}`}
                           type="text"
                           name="subject"
                           value={inputs.subject || ""}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           />
                    {errors.subject && (
                        <p className="body3 request-form__error-label">{errors.subject}</p>
                    )}
                </div>
                <div className="request-form__input-wrapper">
                    <label htmlFor="name" className={`request-form__form-label body3 ${errors.name && 'request-form__form-label--error'}`}>
                        Name*
                    </label>
                    <input className={`request-form__form-field body1 ${errors.name && 'request-form__form-field--error'}`}
                           type="text"
                           name="name"
                           value={inputs.name || ""}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           />
                    {errors.name && (
                        <p className="body3 request-form__error-label">{errors.name}</p>
                    )}
                </div>
                <div className="request-form__input-wrapper">
                    <label htmlFor="phone" className={`request-form__form-label body3 ${errors.phone && 'request-form__form-label--error'}`}>
                        Phone*
                    </label>
                    <input className={`request-form__form-field body1 ${errors.phone && 'request-form__form-field--error'}`}
                           type="text"
                           name="phone"
                           value={inputs.phone || ""}
                           onChange={(e) => {
                               handleChange(e);
                               inputMask(e);
                           }}
                           onBlur={handleBlur}
                           placeholder="+7 ______-__-__"/>
                    {errors.phone && (
                        <p className="body3 request-form__error-label">{errors.phone}</p>
                    )}
                </div>
                <div className="request-form__input-wrapper">
                    <label htmlFor="description" className="request-form__form-label body3">
                        Description
                    </label>
                    <textarea className="request-form__form-field body1"
                              name="description"
                              value={inputs.description || ""}
                              onChange={handleChange}
                              rows="6" cols="10"></textarea>
                </div>
                <button className="request-form__button textbutton body2--medium" id="form-button"
                        type="submit"
                        disabled={isNotValidated}>
                    Send it!
                </button>
            </form>
        </section>
    );
}

export default Form;