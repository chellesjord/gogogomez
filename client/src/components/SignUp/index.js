import Auth from '../../utils/auth'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
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

    const [addUser, { error }] = useMutation(ADD_USER);
    const [isError, setIsError] = useState(false);
    const { firstName, lastName, email, password, phoneNumber, address, allergies } = formState;

    // const handleSend = async (e) => {
    //     e.preventDefault();
    //     console.log(e.target, firstName)
    //     const response = await fetch ('http://localhost:3001/sign-up', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({email, firstName, lastName, phoneNumber, address, allergies})
            
    //     });
    //     const resData = await response.json();
    //     if(resData.status === 'success'){
    //         console.log("message sent")
    //     } else if (resData.status === 'fail'){
    //         console.log("message failed to send")
    //     }
    // };

    const handleFormSubmit = async event => {
        event.preventDefault();

        // console.log({...formState})

        // using a try/catch instead of a promise to handle errors
        try {
            // console.log(formState)
            const { data } = await addUser({
                variables: { 
                    email: formState.email
                 }
            }).then(res => console.log(res))
            // console.log(data)
            Auth.login(data.addUser.token)
        } catch (error) {
            console.error(error)
        }
    }

    // Will un comment this out later - Isaac 

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
        <section className='signup'>
            <h1 className='signup-title'>Sign Up</h1>
            <form id="sign-up-form" onSubmit={handleFormSubmit} method="POST">
                <div className='px-1 py-1'>
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="firstName" placeholder='Enter First Name' value={formState.firstName} onChange={handleChange} />
                </div>
                <div className='px-1 py-1'>
                    <label htmlFor="name">Last Name:</label>
                    <input type="text" name="lastName" placeholder='Enter Last Name' value={formState.lastName} onChange={handleChange} />
                </div>
                <div className='px-1 py-1'>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" placeholder='Enter Email Here' value={formState.email} name="email" onChange={handleChange} />
                </div>
                <div className='px-1 py-1'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder='Enter Password' value={formState.password} onChange={handleChange} />
                </div>
                <div className='px-1 py-1'>
                    <label htmlFor="tel">Phone Number:</label>
                    <input type="tel"  value={formState.phoneNumber} name="phoneNumber" placeholder='Enter Phone Number'  onChange={handleChange} />
                </div>
                <div className='px-1 py-1'>
                    <label htmlFor="text">Delivery address:</label>
                    <input type="text" placeholder='Enter Address'  value={formState.address} name="address" onChange={handleChange} />
                </div>
                <h3 class="text-tertiary">Do you have any allergies?</h3>
                <div>
                    <label htmlFor="eggs">Eggs</label>
                    <input type="checkbox" name="allergies" />
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
                    <label htmlFor="fish">Fish</label>
                    <input type="checkbox" name="fish" />
                </div>
                <div>
                    <label htmlFor="fish">Shellfish</label>
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
                <div className='px-1 py-1'>
                    <label htmlFor="text">Other:</label>
                    <input type="checkbox" name="sesame" />
                    <input type="text" name="firstName" placeholder='Any Other Allergies?'/>
                </div>
                {isError && (
                    <div>
                        <p className="error-text">Error</p>
                    </div>
                )}
                <button className='button-big' type="submit">Submit</button>
            </form>
            {error && <div>Sign up failed ):</div>}
        </section>
    )
}

export default SignUpForm;