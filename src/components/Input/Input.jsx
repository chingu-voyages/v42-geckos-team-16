import React from "react";

export const Input = (props) => {
    const { name, type, label, placeholder, handleChange, className } = props;

    return (
        <>
            <div className="mb-3">
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
                <input
                    type={type}
                    className={`form-control ${className}`}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </>
    );
};
