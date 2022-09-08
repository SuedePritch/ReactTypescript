import { HeadingProps } from "./Types/Heading.Types"
export const Heading = (props: HeadingProps) => {
    return(
        <h1>{props.children}</h1>
    )
}