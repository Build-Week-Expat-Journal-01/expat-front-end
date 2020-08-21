import React from 'react'
import * as yup from 'yup';
import { useState, useEffect} from 'react';
import axios from 'axios'

const formSchema = yup.object().shape({
    username:yup.string().min(2).required('name'),
    password: yup.string().required("Must include password")
})

const Register = () => {



    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    console.log(formData)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const submitReg = (e) => {
        e.preventDefault()

        axios   
        .post('https://build-week-expat-journal-1.herokuapp.com/api/auth/register', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

    return(
        <div>
            <h1>Register</h1>
            <label htmlFor="username">
                    username: 
                    <br/>
                    <input type="text" name='username' value={formData.name} onChange={handleChange}/>
                    <br/>
                </label>
                <label htmlFor="password">
                    Password: 
                    <br/>
                    <input type="password" name='password' value={formData.password} onChange={handleChange}/>
                    <br/>
                </label>
                <br/>
                <button onClick={submitReg} >Submit</button>
        </div>
    )
}

export default Register