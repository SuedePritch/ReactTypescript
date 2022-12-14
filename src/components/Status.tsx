import { StatusProps } from "./Types/Status.Types";
export const Status = (props: StatusProps) =>{
    let message;
    if(props.status === 'loading'){
        message = 'Loading'
    }else if (props.status === 'success'){
        message = 'Data Fetch Successful'
    }else if(props.status === 'error'){
        message = 'Error Fetching Data'
    }
    return(
        <div>
            <h5>Status - {message}</h5>
        </div>
    )
}