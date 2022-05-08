import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMesage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password

    if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'name') {
        setName(inputValue);
    } else{
        setMesage(inputValue);
    }
};

const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
        setErrorMessage('Email or name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setName('');
    setMesage('');
    setEmail('');
    alert(`Hello ${name}`);
};

    return (
        <div>
        <p>Hello {name}</p>
        <form className="form">
            <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>
        {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
        )}
        </div>
    );
}

export default Form;