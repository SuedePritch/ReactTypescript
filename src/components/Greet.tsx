import { GreetProps } from "./Types/Greet.Types"

export const Greet = (props: GreetProps) =>{
    const {messageCount = 0} = props
    return(
        <div>
            <h4>
                {props.isLoggedIn ?
                `Welcome ${props.customer}. You have ${messageCount} new messages`:
                `Welcome Guest`
                }
            </h4>
        </div>
    )
}