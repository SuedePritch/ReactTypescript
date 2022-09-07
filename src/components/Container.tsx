import { ContainerProps } from "../Types/Container.Types"

export const Container = (props: ContainerProps) =>{
    return(
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}