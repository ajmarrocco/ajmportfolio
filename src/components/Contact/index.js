import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject:'', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, subject, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
    };

    const clearFields = (e) =>{
        setFormState('');
    }

    return (
        <section className='contact-section'>
        <h1 className="contact-title" data-testid="h1tag">Contact me</h1>
            <div className='contact-container'>
                {/* <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="subject" name="subject" defaultValue={subject} onBlur={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                    <button data-testid="button" type="submit" onClick={clearFields}>Submit</button>
                </form> */}
            </div>
            <div className='mx-2 contact-info'>
                {/* <div className='flex-row space-evenly'> */}
                    <h2>
                        <a href="tel:(917)846-8357" className='contact'>
                            <span className = "icon" title = 'Phone' data-tooltip = 'Phone'><i className="fas fa-mobile-alt"></i></span>{" "}
                            917-846-8357
                        </a>
                    </h2>
                    <h2>
                        <a href="mailto:ajmarrocco@gmail.com" className='contact'>
                            <span className = "icon" title = 'Envelope' data-tooltip = 'Envelope'><i className="far fa-envelope"></i></span>{" "}
                            Email
                        </a>
                    </h2>
                {/* </div> */}
                {/* <div className='flex-row space-evenly'> */}
                    <h2>
                        <a href="https://github.com/ajmarrocco" target="_blank" rel="noopener noreferrer" className='mx-2 contact'>
                            <span className = "icon" title = 'GitHub' data-tooltip = 'GitHub'><i className="fab fa-github"></i></span>{" "}
                            Github
                        </a>
                    </h2>
                    <h2>
                        <a href="https://www.linkedin.com/in/anthonymarrocco/" target="_blank" rel="noopener noreferrer" className='mx-2 contact'>
                            <span className = "icon" title = 'LinkedIn' data-tooltip = 'LinkedIn'><i className="fab fa-linkedin"></i></span>{" "}
                            LinkedIn
                        </a>
                    </h2>
                    <h2>
                        <a href="https://stackoverflow.com/users/17169985/ajmarrocco?tab=profile" target="_blank" rel="noopener noreferrer" className='mx-2 contact'>
                            <span className = "icon" title = 'StackOverFlow' data-tooltip = 'StackOverFlow'><i className="fab fa-stack-overflow"></i></span>{" "}
                            Stack Overflow
                        </a>
                    </h2>
                {/* </div> */}
            </div>
        </section>
    );
}

export default ContactForm;