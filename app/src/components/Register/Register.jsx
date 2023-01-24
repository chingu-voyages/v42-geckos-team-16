import React from "react";
import { useState } from "react";
import { Input } from "../Input/Input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../constants/urls";


export const Register = () => {
    const goLoginPage = useNavigate();    
    let [loading,setLoading] = useState(false);
    let inputFields = [
        {
            name: "fullname",
            type: "text",
            label: "Full name",
            placeholder: "Enter your full name",
        },
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

    let [user, setUser] = useState({ fullname: "", email: "", password: "" });
    let [frontErrors, setFrontErrors] = useState([]);
    let [backErrors, setBackErrors] = useState("");
    let [token, setToken] = useState();

    //console.log(user);
    //console.log(frontErrors);
    const handleChange = (e) => {
        let myuser = { ...user, [e.target.name]: e.target.value };
        setUser(myuser);
    };

    //validate form data using Joi library on submit
    const Joi = require("joi");
    const validateFormDate = () => {
        const schema = Joi.object({
            fullname: Joi.string(),
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
        let response = await axios.post(`${BASE_URL}/auth/register`, {
            name: user.fullname,
            email: user.email,
            password: user.password,
            role: "client",
        });
        setLoading(false);
        return response;
    };

    const submitRegister = async (e) => {
        e.preventDefault();
        setFrontErrors([]);
        //frontend side validation
        const validateRes = validateFormDate();

        if (validateRes.error) {
            //set front end errors
            setFrontErrors(validateRes.error.details);
        } else {
            //make request to validate user from backend side then set user info and token

            try{
                const backres = await backValidate();
                console.log("Raw results", backres);

                if (backres.status == 201) {
                    let { data } = backres;
                    console.log("Status 201", backres);
                    toast.success("Register Success");
                    //setToken(data.token);
                    //localStorage.setItem("token", data.token);
                    //setUserData();
                    goLoginPage("/login");
                }
                }catch(error){
                    console.log(Object.keys(error), error.response.data.msg);
                    setBackErrors(error.response.data.msg);
                    setLoading(false);
                }
            
        }
    };
    return (
        <>
            <div className="vh-100">
                <div className="m-5 row justify-content-center ">
                    <div className="col-md-6">
                        <h1 className="fs-2 fw-bold text-center my-5">
                            Register
                        </h1>
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
                        {backErrors?<div className="alert alert-danger">{backErrors}</div>:''}
                        <form
                            className="d-flex flex-column"
                            onSubmit={submitRegister}
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
                                 {loading?<i className="fa fa-spinner fa-spin" aria-hidden="true"></i>:'Sign Up'}
                            </button>
                            <p className="text-center my-3">
                                Already have an account ?{" "}
                                <span>
                                    <Link
                                        className="text-dark fw-bold"
                                        to="/login"
                                    >
                                        Login
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
