import React from 'react'

export const Input = (props) => {

    const { name, type, label, placeholder,handleChange } = props;

    

    return (
        <>
            <div className="mb-3">
                <label htmlFor={name} className="form-label">{label}</label>
                <input type={type} className="form-control" name={name} id={name} placeholder={placeholder}  onChange={(e)=>handleChange(e)}/>
            </div>



        </>
    )
}
