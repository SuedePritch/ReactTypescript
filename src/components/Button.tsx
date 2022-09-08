import React from "react"
import { ButtonProps } from "./Types/Button.Types"

export const Button = (props: ButtonProps) =>{
    return <button onClick={event => props.handleClick(event, 1)}>Click Me</button>
}