import React from 'react'
import { useState, useEffect} from 'react';

const Register = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    return(
        <div>
            <h1>Register</h1>
            <label htmlFor="name">
                    Name: 
                    <br/>
                    <input type="text"/>
                    <br/>
                </label>
                <label htmlFor="email">
                    Email: 
                    <br/>
                    <input type="email"/>
                    <br/>
                </label>
                <label htmlFor="password">
                    Password: 
                    <br/>
                    <input type="password"/>
                    <br/>
                </label>
                <br/>
                <button type="submit" disabled={buttonDisabled}>Submit</button>
        </div>
    )
}

export default Register