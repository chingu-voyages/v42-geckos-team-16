import React from "react";
import { useState } from "react";
import { Input } from "../Input/Input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../constants/urls";

export const Login = () => {
    const goHome = useNavigate();
    let [loading,setLoading] = useState(false);
    let inputFields = [
        {
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "name@example.com",
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
        },
    ];

    let [user, setUser] = useState({ email: "", password: "" });
    let [frontErrors, setFrontErrors] = useState([]);
    let [backErrors, setBackErrors] = useState("");
    let [token, setToken] = useState();

    console.log(user);
    console.log(frontErrors);
    const handleChange = (e) => {
        let myuser = { ...user, [e.target.name]: e.target.value };
        setUser(myuser);
    };

    //validate form data using Joi library on submit
    const Joi = require("joi");
    const validateFormDate = () => {
        const schema = Joi.object({
            email: Joi.string().email({
                minDomainSegments: 2,
                tlds: { allow: ["com", "net"] },
            }),
            password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        });

        const result = schema.validate({ ...user }, { abortEarly: false });

        return result;
    };

    //function to validate login user from backend side
    //this data set fixed temporary till we have a better API
    const backValidate = async () => {
        setLoading(true);
        let response = await axios.post('https://fakestoreapi.com/auth/login', {
            username: "mork_2314",
            password: "83r5^_"
        });
        setLoading(false);
        return response;
    };

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
                console.log(data);
                setToken(data.token);

                localStorage.setItem("token", data.token);
                toast.success("Login Success");
                //setUserData();
                goHome("/home");
            }else{
                console.log(backres.status )
            }
        }
    };
    return (
        <>
            <div className="login-bg vh-100">
                <div className="m-5 row justify-content-center ">
                    <div className="col-md-6">
                        <h1 className="fs-2 fw-bold text-center my-5">Login</h1>
                        {frontErrors.map((e, index) => {
                            return (
                                <div
                                    key={index}
                                    className="alert alert-danger "
                                >
                                    {e.message}
                                </div>
                            );
                        })}
                        <form
                            className="d-flex flex-column"
                            onSubmit={submitLogin}
                        >
                            {inputFields.map((field) => {
                                return (
                                    <Input
                                        key={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        label={field.label}
                                        type={field.type}
                                        handleChange={handleChange}
                                    />
                                );
                            })}

                            <button
                                type="submit"
                                className="btn btn-outline-dark"
                            >
                                {loading?<i className="fa fa-spinner fa-spin" aria-hidden="true"></i>:'Sign In'}
                            </button>
                            <p className="text-center my-3">
                                Don't you have an account ?{" "}
                                <span>
                                    <Link
                                        className="text-dark fw-bold"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
