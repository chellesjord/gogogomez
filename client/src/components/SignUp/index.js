import axios from 'axios'
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
        allergies: []
    });

    const [isError, setIsError] = useState(false);
    const { firstName, lastName, email, password, phoneNumber, address, allergies } = formState;

    const handleSend = async (e) => {
        e.preventDefault();
        console.log(e.target, firstName)
        const response = await fetch ('http://localhost:3001/sign-up', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, firstName, lastName, phoneNumber, address, allergies})
            
        });
        const resData = await response.json();
        if(resData.status === 'success'){
            console.log("message sent")
        } else if (resData.status === 'fail'){
            console.log("message failed to send")
        }
    };

    // const handleValidation = (e) => {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    // };


    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]:e.target.value});
        console.log(formState);
    }

    const handleChecked = (e) => {
        if(e.target.checked){
            setFormState({...formState, [e.target.name]:[e.target.name].push(e.target.value)})
        } else {
            setFormState({...formState, [e.target.name]:[e.target.name].splice([e.target.name].indexOf(e.target.value), 1)})
        }
    }

    return (
        <section>
            <h1>Sign Up</h1>
            <form id="sign-up-form" onSubmit={handleSend}>
                <div>
                    <label htmlFor="text">Fist Name:</label>
                    <input type="text" value={formState.firstName} name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="text">Last Name:</label>
                    <input type="text"  value={formState.lastName} name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="text" value={formState.email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" defaultValue={password} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="tel">Phone Number:</label>
                    <input type="tel"  value={formState.phoneNumber} name="phoneNumber"  onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="text">Delivery address:</label>
                    <input type="text"  value={formState.address} name="address" onChange={handleChange} />
                </div>
                <h3 class="text-tertiary">Do you have any allergies?</h3>
                <div>
                    <label htmlFor="eggs">Eggs</label>
                    <input type="checkbox" value={formState.allergies} name="allergies" onChange={handleChecked} />
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
                {isError && (
                    <div>
                        <p className="error-text">Error</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default SignUpForm;