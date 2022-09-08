import React from "react"
import { InputProps } from "./Types/Input.Types"

export const Input = ({value, handleChange}: InputProps) =>{
    return(
        <div>
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    )
}