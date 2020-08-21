import React from 'react';
import * as yup from 'yup';
import { useState, useEffect } from 'react';

const formSchema = yup.object().shape({
    email: yup.string().email("Must include valid email").required("Email is required for sign up."),
    password: yup.string().required("Must include password")
})

const Login = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [post, setPost] = useState([]);

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        formSchema.isValid(formData).then(valid => {
            setButtonDisabled(!valid)
        })
    }, [formData])

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        
        validateChange(e);
        setFormData(newFormData);
    }

        const formSubmit = e => {
        e.preventDefault();

        setFormData({
            email:"",
            password: ""
        })
    }

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    }




    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="email">
                    Email: 
                    <br/>
                    <input type="email" name="email" onChange={inputChange} value={formData.email}/>
                </label>
                <br/>
                <label htmlFor="password">
                    Password: 
                    <br/>
                    <input type="password" name="password" onChange={inputChange} value={formData.password}/>
                    <br/>
                </label>
                <button type="submit" disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    )
}

export default Login