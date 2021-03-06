import React from 'react'
import * as yup from 'yup';
import { useState, useEffect} from 'react';
import { Alert, Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import AxiosWithAuth from '../utils/AxiosWithAuth'
import {useHistory,Redirect} from 'react-router-dom'

const formSchema = yup.object().shape({
    username:yup.string().min(2).required('name'),
    password: yup.string().required("Must include password")
})

const Register = () => {

    const [isSuccess,setIsSuccess] = useState(false)
    // const {push} = useHistory()
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        formSchema.isValid(formData).then(valid => {
            setButtonDisabled(!valid)
        })
    }, [formData])

    // console.log(formData)

    const handleChange = e => {
        e.persist();
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        
        validateChange(e);
        setFormData(newFormData);
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

    const submitReg = (e) => {
        axios   
        .post('https://build-week-expat-journal-1.herokuapp.com/api/auth/register', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

    return(
        <Container>
            {isSuccess && <Redirect to ='/userDashboard'/>}
            <Row>
            <Col sm="12" lg={{ size: 6, offset: 5 }}>
                <div className="form-w-bckgimg">
                    <FormGroup>
                            <h1>Register</h1>
                    <Label htmlFor="username">
                            Username: 
                            <br/>
                            <Input type="text" name='username' value={formData.username} onChange={handleChange}/>
                            <br/>
                        </Label>
                        <br/>
                        <Label htmlFor="password">
                            Password: 
                            <br/>
                            <Input type="password" name='password' value={formData.password} onChange={handleChange}/>
                            <br/>
                        </Label>
                        <br/>
                    <Button onClick={submitReg} disabled={buttonDisabled}>Submit</Button>
                    </FormGroup>

            </div>  
            </Col>
                
            </Row>
        </Container>

    )
}

export default Register