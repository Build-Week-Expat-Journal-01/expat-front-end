import React from 'react';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';


const formSchema = yup.object().shape({
    username: yup.string().required("Username is required for sign up."),
    password: yup.string().required("Must include password")
})

const Login = () => {

    const {push} = useHistory()

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [post, setPost] = useState([]);

    const [errors, setErrors] = useState({
        username: "",
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

        axios
            .post('https://build-week-expat-journal-1.herokuapp.com/api/auth/login', formData)
            .then(res => localStorage.setItem('token',res.data.token))
            .catch(err => console.log(err))

            push('/userDashboard')
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
                    Username: 
                    <br/>
                    <input type="text" name="username" onChange={inputChange} value={formData.username}/>
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