import React from 'react'
import { useState } from 'react';
import { Input } from '../Input/Input';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const goHome = useNavigate();
    let inputFields = [{
        name: "email",
        type: "email",
        label: "Email Address",
        placeholder: "name@example.com"

    },
    {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Enter your password"

    }
    ];

    let [user, setUser] = useState({ email: "", password: "" });
    let [frontErrors, setFrontErrors] = useState([]);
    let [backErrors, setBackErrors] = useState("");
    let [token, setToken] = useState();

    
    const handleChange = (e) => {
        let myuser = { ...user, [e.target.name]: e.target.value };
        setUser(myuser);
    }

    //validate form data using Joi library on submit
    const Joi = require('joi');
    const validateFormDate = () => {
        const schema = Joi.object({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });

        const result = schema.validate({ ...user }, { abortEarly: false });

        return result;
    }

    //function to validate login user from backend side
    //this data set fixed temporary till we have a better API
    const backValidate = async () => {
        let response = await axios.post('https://fakestoreapi.com/auth/login', { username: "mor_2314", password: "83r5^_" });
        return (response);
    }

    const submitLogin = async (e) => {

        e.preventDefault();
        setFrontErrors([]);
        //frontend side validation
        const validateRes = validateFormDate();

        if (validateRes.error) {
            //set front end errors
            setFrontErrors(validateRes.error.details);

        } else {
            //make request to validate user from backend side then set user info and token

            const backres = await backValidate();

            if (backres.status == 200) {
                let { data } = backres;
                setToken(data.token);
                localStorage.setItem('token', data.token);
                //setUserData();
                goHome('/home');
            }

        }
    }
    return (
        <>
            <div className="login-bg vh-100">
                <div className="m-5 row justify-content-center ">
                    <div className="col-md-6">
                        <h1 className='fs-2 fw-bold text-center my-5'>Login</h1>
                        {
                            frontErrors.map((e, index) => {

                                return (<div key={index} className='alert alert-danger '>{e.message}</div>)
                            })
                        }
                        <form className='d-flex flex-column' onSubmit={submitLogin}>

                            {inputFields.map((field) => {

                                return <Input key={field.name} name={field.name} placeholder={field.placeholder} label={field.label} type={field.type} handleChange={handleChange} />
                            })}


                            <button type="submit" className="btn btn-outline-dark">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
