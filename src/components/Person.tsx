import { PersonProps } from "./Types/Person.Types"
export const Person = (props: PersonProps) =>{
    return(
        <div>{props.name.first} {props.name.last}</div>
    )
}