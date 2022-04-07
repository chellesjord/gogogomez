import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function SignUpForm() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { firstName, lastName, email, password, phoneNumber, address } = formState;

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

    return (
        <section>
            <h1>Sign Up</h1>
            <form id="sign-up-form">
                <div>
                    <label htmlFor="text">Fist Name:</label>
                    <input type="text" name="firstName" defaultValue={firstName} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="text">Last Name:</label>
                    <input type="text" name="firstName" defaultValue={lastName} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" defaultValue={password} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="tel">Phone Number:</label>
                    <input type="tel" name="phoneNumber" defaultValue={phoneNumber} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="text">Delivery address:</label>
                    <input type="text" name="address" defaultValue={address} onBlur={handleChange} />
                </div>
                <h3 class="text-tertiary">Do you have any allergies?</h3>
                <div>
                    <label htmlFor="eggs">Eggs</label>
                    <input type="checkbox" name="eggs" />
                </div>
                <div>
                    <label htmlFor="dairy">Milk/Dairy</label>
                    <input type="checkbox" name="dairy" />
                </div>
                <div>
                    <label htmlFor="nuts">Nuts</label>
                    <input type="checkbox" name="nuts" />
                </div>
                <div>
                    <label htmlFor="fish">Fish/Shellfish</label>
                    <input type="checkbox" name="fish" />
                </div>
                <div>
                    <label htmlFor="wheat">Wheat</label>
                    <input type="checkbox" name="wheat" />
                </div>
                <div>
                    <label htmlFor="soy">Soy</label>
                    <input type="checkbox" name="soy" />
                </div>
                <div>
                    <label htmlFor="sesame">Sesame</label>
                    <input type="checkbox" name="sesame" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default SignUpForm;