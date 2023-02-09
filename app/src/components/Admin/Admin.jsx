import React, { useState } from "react";
import { Input } from "../Input/Input";

const Admin = () => {
    let [loading, setLoading] = useState(false);
    let [frontErrors, setFrontErrors] = useState([]);

    const inputFields = [
        {
            name: "name",
            type: "text",
            label: "Name",
            placeholder: "HP EliteBook 360",
        },
        {
            name: "price",
            type: "number",
            label: "Price",
            placeholder: "700",
        },
        {
            name: "category",
            type: "text",
            label: "Category",
            placeholder: "Computer",
        },
        {
            name: "rating",
            type: "number",
            label: "Rating",
            placeholder: "5",
        },
        {
            name: "company",
            type: "text",
            label: "Company",
            placeholder: "HP",
        },
        {
            name: "image",
            type: "file",
            label: "Image",
            placeholder: "Product Image",
        },
    ];

    const handleChange = () => {};

    return (
        <>
            <div className="vh-100">
                <div className="m-5 row justify-content-center ">
                    <div className="col-md-6">
                        <h1 className="fs-2 fw-bold text-center my-5">
                            Product Infos
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
                        <form className="d-flex flex-column">
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

                            <div className="mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    placeholder="State of art computer"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-outline-dark"
                            >
                                {loading ? (
                                    <i
                                        className="fa fa-spinner fa-spin"
                                        aria-hidden="true"
                                    ></i>
                                ) : (
                                    "Add product"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
