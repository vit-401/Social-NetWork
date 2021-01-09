import React from "react"


export const renderField = ({ input, label, type, meta }) => (
    <div>
        {console.log(meta)}
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
           
        </div>
    </div>
)