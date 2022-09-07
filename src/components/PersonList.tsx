type PersonListProps = {
    personList:{
        first:string
        last: string
    }[]
}
export const PersonList = (props: PersonListProps) =>{
    return(
        <div>
            {props.personList.map(name=>{
            return(
            <h3>{name.first} {name.last}</h3>)
        })}
        </div>
    )
}